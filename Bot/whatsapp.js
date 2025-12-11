import mongoose from "mongoose";
import pkg from "whatsapp-web.js";
const { Client, RemoteAuth } = pkg;
import dotenv from "dotenv";
dotenv.config();
import QRCode from "qrcode";
import { MongoStore } from "wwebjs-mongo";
import { getIAResponse } from "./botAI.js";

let client = null;

const botStart = Math.floor(Date.now() / 1000);

const OWNER = "5218671291218@c.us";

//const blockedUsers = new Set();

export async function Whatsapp() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "whatsapp_sessions",
        });
        console.log("📦 MongoDB conectado para sesiones ✔");
    } catch (err) {
        console.error("❌ Error al conectar Mongo:", err);
        return;
    }

    const store = new MongoStore({ mongoose });

    const authStrategy = new RemoteAuth({
        store,
        clientId: "posdatamx",
        backupSyncIntervalMs: 60000
    });

    client = new Client({
        authStrategy,
        puppeteer: {
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage"
            ]
        }
    });

    client.on("qr", async (qr) => {
        console.log("📲 Generando QR PNG...");
        try {
            await QRCode.toFile("./qr.png", qr, { width: 350 });
            console.log(`🖼  QR generado → /qr.png`);
        } catch (err) {
            console.log("❌ Error generando QR:", err);
        }
    });

    client.on("remote_session_saved", () => console.log("💾 Sesión guardada ✔"));
    client.on("authenticated", () => console.log("🔐 Autenticado ✔"));
    client.on("ready", () => console.log("🤖 WhatsApp listo ✔"));

    client.on("message", async (msg) => {
        try {
            const texto = msg.body?.trim();
            if (!texto) return;

            if (msg.timestamp < botStart) {
                console.log("⏳ Mensaje antiguo ignorado");
                return;
            }

            if (msg.isGroupMsg || msg.from.endsWith("@g.us")) {
                console.log("🚫 Mensaje de grupo ignorado");
                return;
            }

            // if (blockedUsers.has(msg.from)) {
            //     console.log("🛑 Usuario derivado a humano, bot ya no responde ->", msg.from);
            //     return;
            // }

            const { text: replyText, intent } = getIAResponse(texto, msg.from);

            if (intent === "cotizacion" || intent === "humano") {
                const tipo = intent === "humano"
                    ? "Contacto con asesor"
                    : "Solicitud de cotización";

                console.log(`📢 Detected intent crítico (${tipo}) desde: ${msg.from}`);

                try {
                    await client.sendMessage(
                        OWNER,
                        `📌 *${tipo}*\n\n📱 Cliente: ${msg.from}\n📝 Mensaje: "${texto}"`
                    );
                } catch (err) {
                    console.error("❌ Error enviando aviso al dueño:", err);
                }

                try {
                    await client.sendMessage(msg.from, replyText);
                } catch (err) {
                    console.error("❌ Error enviando mensaje al cliente:", err);
                }

                //blockedUsers.add(msg.from);
                console.log("🔒 Usuario marcado como atendido por humano ->", msg.from);

                return;
            }

            try {
                await client.sendMessage(msg.from, replyText);
            } catch (err) {
                console.error("❌ Error enviando mensaje al cliente:", err);
            }

        } catch (err) {
            console.error("❌ Error procesando mensaje:", err);
        }
    });

    client.initialize();
    return client;
}
