import natural from "natural";

const classifier = new natural.BayesClassifier();

// MENU
classifier.addDocument("hola", "menu");
classifier.addDocument("buen día", "menu");
classifier.addDocument("que tal", "menu");
classifier.addDocument("servicios", "menu");
classifier.addDocument("qué ofrecen", "menu");

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

    menu: `👋 ¡Hola! Bienvenido a POSDATAMX.
Estoy aquí para ayudarte.

📌 *Menú principal*  
1️⃣ Fotografía  
2️⃣ Diseño  
3️⃣ Contenido  
4️⃣ Servicios Web  
5️⃣ Video  
6️⃣ Streaming  
7️⃣ Hablar con un asesor/Cotizar/Soporte

Escribe el *número* de la opción que deseas consultar, tambien puedes preguntar por la ubicacion o por el contacto si asi lo deseas.
`,
    foto: `📸 *Fotografía Profesional*

Cada imagen es una historia. Realizamos:
• Fotografía de eventos corporativos  
• Catálogos de productos  
• Sesiones para redes sociales  
• Retratos y fotos de equipo  
• Edición y retoque profesional  

¿Quieres conocer precios o agendar una sesión? solicita ayuda escribiendo "Cotizacion"`
,

    diseno: `🎨 *Diseño Creativo*

Creamos identidad visual y piezas gráficas que conectan con tu audiencia:

• Identidad corporativa  
• Material publicitario  
• Presentaciones y stands  
• Interfaces web y móviles  
• Diseño para redes sociales  

¿Te gustaría un diseño personalizado? solicita ayuda escribiendo "Cotizacion"`
,
    contenido: `🎬 *Producción de Contenido Multimedia*

Impulsa tu marca con contenido profesional:

• Videos promocionales  
• Motion graphics  
• Cobertura de eventos  
• Contenido para redes  
• Edición y postproducción  

¿Quieres iniciar un proyecto de contenido? solicita ayuda escribiendo "Cotizacion"`,

    web: `💻 *Desarrollo y Hosting Web*

Creamos sitios web modernos, rápidos y seguros:

• Sitios web a medida  
• Aplicaciones web personalizadas  
• Hosting seguro  
• Certificados SSL  
• Mantenimiento y soporte  

¿Deseas conocer nuestros planes web? solicita ayuda escribiendo "Cotizacion"`
,

    video: `🎥 *Video Corporativo Profesional*

Contamos historias visuales para tu marca:

• Guionización  
• Grabación profesional  
• Videos institucionales  
• Videos promocionales  
• Edición y efectos  

¿Quieres una propuesta de video? solicita ayuda escribiendo "Cotizacion"`
,

    streaming: `📡 *Streaming Profesional*

Transmitimos eventos en vivo con calidad de producción:

• Streaming en redes sociales  
• Producción multicanal  
• Cámaras y audio en tiempo real  
• Integración con YouTube, Facebook y Twitch  
• Eventos presenciales o virtuales  

¿Deseas agendar una transmisión? solicita ayuda escribiendo "Cotizacion"`
,

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
        case "1": return respuestas.foto;
        case "2": return respuestas.diseno;
        case "3": return respuestas.contenido;
        case "4": return respuestas.web;
        case "5": return respuestas.video;
        case "6": return respuestas.streaming;
        case "7": return respuestas.humano;
        default: return respuestas.default;
    }
}

const userState = new Map(); 

const afirmativos = ["si","sí","claro","ok","vale","perfecto"];

export function getIAResponse(texto, from) {  
    const msg = texto.toLowerCase().trim();

    if (/^[1-7]$/.test(msg)) {
        userState.set(from, "esperando_confirmacion");
        return handleMenu(msg);
    }

    if (userState.get(from) === "esperando_confirmacion") {
        if (afirmativos.includes(msg)) {
            userState.delete(from);
            return respuestas.humano;
        }
    }

    if (msg.includes("humano") || msg.includes("asesor") || msg.includes("persona")) {
        return respuestas.humano;
    }

    const top = classifier.getClassifications(msg)[0];

    if (["foto","diseno","contenido","web","video","streaming"].includes(top.label)) {
        userState.set(from, "esperando_confirmacion");
    }

    return respuestas[top.label] || respuestas.default;
}
