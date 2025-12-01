
import mongoose from "mongoose";
import pkg from "whatsapp-web.js";
const { Client, RemoteAuth } = pkg;
import dotenv from "dotenv";
dotenv.config();
import QRCode from "qrcode";
import { MongoStore } from "wwebjs-mongo";
import { getIAResponse } from "./botAI.js";

let client = null;

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

    client.on("remote_session_saved", () =>
        console.log("💾 Sesión guardada en Mongo ✔")
    );

    client.on("authenticated", () =>
        console.log("🔐 Sesión autenticada ✔")
    );

    client.on("ready", () =>
        console.log("🤖 WhatsApp listo ✔")
    );

    client.on("message", async (msg) => {
        try {
            const texto = msg.body?.trim();

            if (!texto) return;
            const reply = getIAResponse(texto);
            await client.sendMessage(msg.from, reply);
        } catch (err) {
            console.error("❌ Error procesando mensaje:", err);
        }
    });

    client.initialize();
    return client;
}
