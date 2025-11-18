import qrcode from "qrcode-terminal";
import pkg from "whatsapp-web.js";
const { Client, LocalAuth } = pkg;
import { BOT_NAME } from "./config.js";
import { handleMessage } from "./flowHandler.js";

export function botWhatsapp() {
    console.log(`${BOT_NAME} iniciando...`);

    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            headless: true, 
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage"
            ],
            defaultViewport: null
        }
    });


    client.on("qr", qr => {
        console.log("Escanea este QR para iniciar sesión en WhatsApp:");
        qrcode.generate(qr, { small: true });
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
