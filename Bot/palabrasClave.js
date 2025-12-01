export const keywordOverrides = {
    // STREAMING
    streaming: [
        "streaming", "live", "transmisión", "transmision",
        "en vivo", "evento en vivo", "broadcast", "livestream"
    ],

    // VIDEO
    video: [
        "video", "videos", "grabación", "grabacion", "filmación", 
        "filmacion", "corporativo", "recording", "filming", "video production"
    ],

    // WEB
    web: [
        "web", "página", "pagina", "sitio", "website",
        "hosting", "domain", "dominio", "create a website"
    ],

    // DISEÑO
    diseno: [
        "diseño", "diseño gráfico", "diseño grafico", "gráfico", "grafico", 
        "logo", "identidad", "branding", "design", "graphic design",
        "logo design", "brand identity"
    ],

    // FOTOGRAFÍA
    fotografia: [
        "foto", "fotografía", "fotografia", "imagen", "sesión",
        "sesion", "retrato", "photo", "photography", "photoshoot",
        "corporate photography", "product photos"
    ],

    // COTIZACIÓN
    cotizacion: [
        "cotización", "cotizacion", "presupuesto",
        "precio", "cuánto cuesta", "cuanto cuesta",
        "quote", "get a quote", "price", "how much"
    ],

    // CONTACTO
    contacto: [
        "contacto", "teléfono", "telefono", "correo", "email",
        "contact", "email address", "phone number",
        "how can I contact you", "customer service"
    ],

    // UBICACIÓN
    ubicacion: [
        "ubicación", "ubicacion", "dónde están", "donde estan", "dirección",
        "address", "location", "where are you located",
        "in which city"
    ],

    // SALUDO
    saludo: [
        "hola", "buenos días", "buenas tardes", "buenas noches",
        "hello", "hi", "hey", "good morning", "good afternoon", "good evening"
    ],
};

export function detectarClaves(msg) {
    if (!msg) return null;

    const normalize = (str) =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const cleanMsg = normalize(msg.toLowerCase());

    for (const intent in keywordOverrides) {
        for (let word of keywordOverrides[intent]) {
            word = normalize(word.toLowerCase());

            if (cleanMsg.includes(word)) {
                return intent;
            }
        }
    }

    return null;
}