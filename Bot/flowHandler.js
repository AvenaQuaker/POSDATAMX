import { getIAResponse } from "./botAI.js";
import { OWNER_NUMBER } from "./config.js";

export const chatsHumanos = new Set();

export async function handleMessage(msg, client) {
    const from = msg.from;
    const text = msg.body.toLowerCase();
    
    if (from.endsWith("@g.us") || from.endsWith("@broadcast")) {
        return;
    }

    if (chatsHumanos.has(from)) return;

    if (
        text.includes("humano") ||
        text.includes("asesor") ||
        text.includes("persona")
    ) {
        chatsHumanos.add(from);

        await msg.reply(
            "🔵 Conectándote con un asesor humano...\nYa no responderé más mensajes 🙌"
        );

        await client.sendMessage(
            OWNER_NUMBER,
            `⚠️ *ALERTA:* Un cliente requiere atención humana.\n\n📱 Número: ${from}\n💬 Último mensaje: "${msg.body}"`
        );

        return;
    }
    const reply = getIAResponse(text);
    await msg.reply(reply); 
}
