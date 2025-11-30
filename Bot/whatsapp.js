import qrcode from "qrcode";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;
import { BOT_NAME } from "./config.js";
import { handleMessage } from "./flowHandler.js";
import fs from "fs";

export function botWhatsapp() {
    console.log(`${BOT_NAME} iniciando...`);

    const sessionExist = fs.existsSync("./wwebjs_auth");

    const client = new Client({
        authStrategy: new LocalAuth({
            dataPath: './wwebjs_auth'
        }),
        puppeteer: {
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--disable-software-rasterizer",
                "--disable-extensions"
            ]
        }
    });

    client.on("qr", async qr => {

    if(sessionExist){
        console.log("Sesion existente encontrada!")
        return;
    }

    const qrImageUrl = await qrcode.toDataURL(qr);

    console.log("Generando QR...");
    console.log("🔗 Escanea este QR desde tu navegador:");
    console.log(qrImageUrl);
});

    client.on("ready", () => {
        console.log(`✅ ${BOT_NAME} está listo y conectado.`);
    });

    client.on("message", async msg => {
        try {
            await handleMessage(msg, client);
        } catch (err) {
            console.error("❌ Error procesando mensaje:", err);
        }
    });

    client.initialize();
}
