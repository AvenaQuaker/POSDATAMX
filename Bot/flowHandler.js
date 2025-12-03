export async function handleMessage(msg, client) {
    const from = msg.from;
    const text = msg.body.toLowerCase().trim();

    if (!from.endsWith("@c.us")) return;

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

        console.log("📩 Enviando al dueño:", OWNER_NUMBER);

        await client.sendMessage(
            "5218671006263@c.us",
            `🔵 *Nuevo cliente requiere asesoramiento humano*\n\n📱 Número: ${from}\n📌 Mensaje: "${msg.body}"`
        );

        return;
    }

    const reply = getIAResponse(text, from);
    await client.sendMessage(from, reply);
}
