export const keywordOverrides = {
    streaming: ["streaming", "live", "transmisión", "en vivo", "evento en vivo"],
    video: ["video", "videos", "grabación", "filmación", "corporativo"],
    web: ["web", "página", "sitio", "hosting", "dominio"],
    diseno: ["diseño", "gráfico", "logo", "identidad", "branding"],
    fotografia: ["foto", "fotografía", "imagen", "sesión", "retrato"],
    cotizacion: ["cotización", "presupuesto", "precio", "cuánto cuesta"],
    contacto: ["contacto", "teléfono", "correo", "email"],
    ubicacion: ["ubicación", "dónde están", "dirección"],
    saludo: ["hola", "buenos días", "buenas tardes"],
};

export function detectarClaves(msg) {
    for (const intent in keywordOverrides) {
        for (const word of keywordOverrides[intent]) {
        if (msg.includes(word)) {
            return intent;
        }
        }
    }
    return null;
}
