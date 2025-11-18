import natural from "natural";

const classifier = new natural.BayesClassifier();

// SALUDOS
classifier.addDocument("hola", "saludo");
classifier.addDocument("buen día", "saludo");
classifier.addDocument("que tal", "saludo");

// SERVICIO GENERAL
classifier.addDocument("servicios", "servicios");
classifier.addDocument("qué ofrecen", "servicios");

// ESPECÍFICOS
classifier.addDocument("fotografía", "foto");
classifier.addDocument("foto", "foto");
classifier.addDocument("diseño", "diseno");
classifier.addDocument("página web", "web");
classifier.addDocument("web", "web");
classifier.addDocument("video", "video");
classifier.addDocument("streaming", "streaming");

// CONTACTO
classifier.addDocument("contacto", "contacto");
classifier.addDocument("teléfono", "contacto");
classifier.addDocument("correo", "contacto");

// UBICACIÓN
classifier.addDocument("ubicación", "ubicacion");
classifier.addDocument("dónde están", "ubicacion");

// COTIZACIÓN
classifier.addDocument("cotización", "cotizacion");
classifier.addDocument("precio", "cotizacion");

classifier.addDocument("humano", "humano");
classifier.addDocument("asesor", "humano");
classifier.addDocument("persona", "humano");

classifier.train();

export const respuestas = {
    saludo: `👋 ¡Hola! Soy el asistente virtual de POSDATAMX.\n\n¿En qué puedo ayudarte hoy?`,
    
    servicios: `📌 *Nuestros servicios:*
- 📸 Fotografía profesional
- 🎨 Diseño gráfico
- 🌐 Desarrollo web
- 🎬 Video corporativo
- 📡 Streaming profesional

Escríbeme: *fotografía*, *diseño*, *web*, *video*, *streaming* para más info.`,

    foto: `📸 *Servicio de Fotografía*\nCaptura profesional para empresas, productos, eventos y contenido digital.\n¿Quieres conocer precios o agendar?`,

    diseno: `🎨 *Servicio de Diseño Gráfico*\nIdentidad visual, logos, branding, banners y todo tipo de diseño publicitario.`,

    web: `🌐 *Desarrollo Web*\nSitios modernos, rápidos y seguros. Hosting y mantenimiento incluidos.`,

    video: `🎬 *Video Corporativo*\nProducción completa para empresas, storytelling, entrevistas y contenido digital.`,

    streaming: `📡 *Streaming Profesional*\nTransmisión en vivo para eventos, conferencias y contenido en redes sociales.`,

    contacto: `📞 *Datos de contacto:*\nWhatsApp: este chat\nCorreo: contacto@posdatamx.com\nFacebook: POSDATAMX`,

    ubicacion: `📍 *Ubicación:* Hotel Real Inn, Av. Reforma 5430, Nuevo Laredo, Tamaulipas.`,

    cotizacion: `💼 Para darte una cotización necesito saber:\n\n1) ¿Qué servicio deseas?\n2) ¿Qué tan pronto lo necesitas?\n3) ¿Cuál es tu presupuesto aproximado?\n\nPuedo ayudarte o pasarte con un asesor humano.`,

    humano: `🧑‍💼 De acuerdo, te conectaré con un asesor humano.\n\n__HUMANO__`,

    default: `😅 No entendí muy bien.\nPuedes escribir:\n• servicios\n• fotografía\n• diseño\n• web\n• cotización\n• ubicación\n• contacto\n\nO escribe *asesor* para hablar con un humano.`
};

export function getIAResponse(texto) {
    const msg = texto.toLowerCase();

    const classification = classifier.getClassifications(msg);
    const top = classification[0];

    return respuestas[top.label] || respuestas.default;
}
