import natural from "natural";

const classifier = new natural.BayesClassifier();

// SALUDOS
classifier.addDocument("hola", "saludo");
classifier.addDocument("buen día", "saludo");
classifier.addDocument("que tal", "saludo");

// SERVICIOS
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

// HUMANO
classifier.addDocument("humano", "humano");
classifier.addDocument("asesor", "humano");
classifier.addDocument("persona", "humano");

classifier.train();

export const respuestas = {

    menuInicio: `👋 ¡Hola! Soy el asistente virtual de *POSDATAMX*.

📌 Elige una opción con el número:

1️⃣ Ver nuestros servicios  
2️⃣ Solicitar cotización  
3️⃣ Ver ubicación  
4️⃣ Información de contacto  
5️⃣ Hablar con un asesor humano  
`,

    servicios: `📌 *Nuestros servicios:*
- 📸 Fotografía profesional
- 🎨 Diseño gráfico
- 🌐 Desarrollo web
- 🎬 Video corporativo
- 📡 Streaming profesional

Escribe una palabra clave o un número del menú.`,

    foto: `📸 *Fotografía profesional*\nPara productos, empresas, eventos y más.`,

    diseno: `🎨 *Diseño gráfico*\nBranding, logos, banners y material publicitario.`,

    web: `🌐 *Desarrollo Web*\nSitios rápidos, modernos y con hosting incluido.`,

    video: `🎬 *Video Corporativo*\nProducción completa para negocios y marcas.`,

    streaming: `📡 *Streaming Profesional*\nEventos, conferencias y transmisiones.`,

    contacto: `📞 *Contacto:*
WhatsApp: este chat
Correo: contacto@posdatamx.com`,

    ubicacion: `📍 Estamos en: Hotel Real Inn, Av. Reforma 5430.`,

    cotizacion: `💼 Para consultar precios, utilidades y servicios mas especializados, te pondremos en contacto con un asesor que
    le apoyo en el tema! contactando un asesor...`,

    humano: `🧑‍💼 Conectándote con un asesor humano...`,

    default: `🤔 No entendí.
Escribe un número del menú o una palabra como *fotografía*, *diseño*, *web*, *video*, *streaming*.`
};

function handleMenu(num) {
    switch(num) {
        case "1": return respuestas.servicios;
        case "2": return respuestas.cotizacion;
        case "3": return respuestas.ubicacion;
        case "4": return respuestas.contacto;
        case "5": return respuestas.humano;
        default: return respuestas.default;
    }
}

export function getIAResponse(texto) {
    const msg = texto.toLowerCase().trim();

    if (/^[1-5]$/.test(msg)) {
        return handleMenu(msg);
    }

    if (msg.includes("humano") || msg.includes("asesor") || msg.includes("persona")) {
        return respuestas.humano;
    }

    const top = classifier.getClassifications(msg)[0];
    return respuestas[top.label] || respuestas.default;
}
