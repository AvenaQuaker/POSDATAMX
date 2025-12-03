import natural from "natural";

const classifier = new natural.BayesClassifier();

// MENU
classifier.addDocument("hola", "menu");
classifier.addDocument("buen día", "menu");
classifier.addDocument("buenos dias", "menu");
classifier.addDocument("buenas tardes", "menu");
classifier.addDocument("buenas noches", "menu");
classifier.addDocument("que tal", "menu");
classifier.addDocument("cómo estás", "menu");
classifier.addDocument("hey", "menu");
classifier.addDocument("hola qué servicios tienen", "menu");
classifier.addDocument("quiero información", "menu");
classifier.addDocument("información", "menu");
classifier.addDocument("servicios", "menu");
classifier.addDocument("qué ofrecen", "menu");
classifier.addDocument("qué hacen", "menu");
classifier.addDocument("qué manejan", "menu");
classifier.addDocument("quiero saber qué hacen", "menu");

// ESPECÍFICOS
classifier.addDocument("fotografía", "foto");
classifier.addDocument("foto", "foto");
classifier.addDocument("sesión de fotos", "foto");
classifier.addDocument("fotos profesionales", "foto");
classifier.addDocument("fotógrafo", "foto");
classifier.addDocument("quiero fotos", "foto");
classifier.addDocument("necesito una sesión", "foto");

classifier.addDocument("contenido","contenido");
classifier.addDocument("motion", "contenido");
classifier.addDocument("contenido para redes", "contenido");
classifier.addDocument("edicion", "contenido");
classifier.addDocument("produccion", "contenido");

classifier.addDocument("diseño", "diseno");
classifier.addDocument("logo", "diseno");
classifier.addDocument("diseño gráfico", "diseno");
classifier.addDocument("branding", "diseno");
classifier.addDocument("identidad visual", "diseno");
classifier.addDocument("necesito un diseño", "diseno");

classifier.addDocument("página web", "web");
classifier.addDocument("sitio web", "web");
classifier.addDocument("quiero una web", "web");
classifier.addDocument("necesito un sitio", "web");
classifier.addDocument("desarrollo web", "web");
classifier.addDocument("hosting", "web");
classifier.addDocument("dominio", "web");

classifier.addDocument("video", "video");
classifier.addDocument("grabación", "video");
classifier.addDocument("video corporativo", "video");
classifier.addDocument("producción de video", "video");
classifier.addDocument("edición de video", "video");
classifier.addDocument("filmación", "video");

classifier.addDocument("streaming", "streaming");
classifier.addDocument("transmisión", "streaming");
classifier.addDocument("en vivo", "streaming");
classifier.addDocument("transmisión en vivo", "streaming");
classifier.addDocument("live", "streaming");
classifier.addDocument("evento en vivo", "streaming");


// CONTACTO
classifier.addDocument("contacto", "contacto");
classifier.addDocument("teléfono", "contacto");
classifier.addDocument("numero", "contacto");
classifier.addDocument("correo", "contacto");
classifier.addDocument("email", "contacto");
classifier.addDocument("tienen whatsapp", "contacto");
classifier.addDocument("cómo los contacto", "contacto");
classifier.addDocument("puedo llamar", "contacto");


// UBICACIÓN
classifier.addDocument("ubicación", "ubicacion");
classifier.addDocument("dónde están", "ubicacion");
classifier.addDocument("cómo llegar", "ubicacion");
classifier.addDocument("dirección", "ubicacion");


// COTIZACIÓN
classifier.addDocument("cotización", "cotizacion");
classifier.addDocument("cotizar", "cotizacion");
classifier.addDocument("precio", "cotizacion");
classifier.addDocument("cuánto cuesta", "cotizacion");
classifier.addDocument("cuánto cobran", "cotizacion");
classifier.addDocument("necesito presupuesto", "cotizacion");

// HUMANO
classifier.addDocument("humano", "humano");
classifier.addDocument("asesor", "humano");
classifier.addDocument("persona", "humano");
classifier.addDocument("quiero hablar con alguien", "humano");
classifier.addDocument("atención humana", "humano");
classifier.addDocument("necesito un asesor", "humano");
classifier.addDocument("me puede atender una persona", "humano");
classifier.addDocument("quiero hablar con un humano", "humano");
classifier.addDocument("quiero una persona real", "humano");


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
