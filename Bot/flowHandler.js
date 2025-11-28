import { getIAResponse } from "./botAI.js";
import { OWNER_NUMBER } from "./config.js";

export const chatsHumanos = new Set();

export async function handleMessage(msg, client) {
    const from = msg.from;
    const text = msg.body.toLowerCase().trim();

    //if (chatsHumanos.has(from)) return;

    const triggersCotizacion = [
        "cotización", "cotizacion",
        "precio", "cuánto cuesta", "cuanto cuesta",
        "presupuesto", "cotizar"
    ];

    const triggersHumano = [
        "humano", "asesor", "persona", "ayuda real"
    ];

    const requiereHumano =
        triggersHumano.some(t => text.includes(t)) ||
        triggersCotizacion.some(t => text.includes(t));

    if (requiereHumano) {
        chatsHumanos.add(from);

        await client.sendMessage(
            from,
            "🧑‍💼 Te conectaré con un asesor humano.\nPor favor espera un momento…"
        );

        await client.sendMessage(
            OWNER_NUMBER,
            `🔵 *Nuevo cliente requiere asesoramiento humano*\n\n📱 Número: ${from}\n📌 Mensaje: "${msg.body}"`
        );

        return;
    }

    // 3. Procesamiento normal de IA
    const reply = getIAResponse(text);
    await client.sendMessage(from, reply);
}
