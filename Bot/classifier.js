import natural from "natural";
import {respuestas} from "./respuestas.js"
import { detectarClaves } from "./palabrasClave.js";

// === ENTRENAMIENTO ===
const classifier = new natural.BayesClassifier();

// SALUDO
classifier.addDocument("hola", "saludo");
classifier.addDocument("buenos días", "saludo");
classifier.addDocument("buenas tardes", "saludo");
classifier.addDocument("buenas noches", "saludo");
classifier.addDocument("hey", "saludo");
classifier.addDocument("qué tal", "saludo");
classifier.addDocument("saludos", "saludo");

classifier.addDocument("hi", "saludo");
classifier.addDocument("hello", "saludo");
classifier.addDocument("hey", "saludo");
classifier.addDocument("greetings", "saludo");
classifier.addDocument("good morning", "saludo");
classifier.addDocument("good afternoon", "saludo");
classifier.addDocument("good evening", "saludo");

// UBICACIÓN
classifier.addDocument("dónde están ubicados", "ubicacion");
classifier.addDocument("dónde se encuentran", "ubicacion");
classifier.addDocument("dirección", "ubicacion");
classifier.addDocument("ubicación", "ubicacion");
classifier.addDocument("cómo llegar", "ubicacion");
classifier.addDocument("en qué ciudad están", "ubicacion");
classifier.addDocument("dónde queda posdatamx", "ubicacion");

classifier.addDocument("where are you located", "ubicacion");
classifier.addDocument("location", "ubicacion");
classifier.addDocument("address", "ubicacion");
classifier.addDocument("how do I get there", "ubicacion");
classifier.addDocument("in which city are you", "ubicacion");
classifier.addDocument("where is posdatamx", "ubicacion");


// CONTACTO
classifier.addDocument("cómo puedo contactarlos", "contacto");
classifier.addDocument("contacto", "contacto");
classifier.addDocument("tienen correo", "contacto");
classifier.addDocument("me podrían dar su teléfono", "contacto");
classifier.addDocument("tienen redes sociales", "contacto");
classifier.addDocument("cómo los encuentro", "contacto");
classifier.addDocument("atención al cliente", "contacto");

classifier.addDocument("how can I contact you", "contacto");
classifier.addDocument("do you have an email", "contacto");
classifier.addDocument("can you give me your phone number", "contacto");
classifier.addDocument("customer support", "contacto");
classifier.addDocument("social networks", "contacto");
classifier.addDocument("how do I find you", "contacto");


// COTIZACIÓN
classifier.addDocument("quiero una cotización", "cotizacion");
classifier.addDocument("puedo pedir una cotización", "cotizacion");
classifier.addDocument("necesito presupuesto", "cotizacion");
classifier.addDocument("cuánto cuesta", "cotizacion");
classifier.addDocument("me pueden cotizar", "cotizacion");
classifier.addDocument("precio del servicio", "cotizacion");
classifier.addDocument("quiero cotizar un trabajo", "cotizacion");

classifier.addDocument("quote", "cotizacion");
classifier.addDocument("can I get a quote", "cotizacion");
classifier.addDocument("I need a budget", "cotizacion");
classifier.addDocument("can you quote me", "cotizacion");
classifier.addDocument("how much does it cost", "cotizacion");
classifier.addDocument("price estimate", "cotizacion");


// PRECIO
classifier.addDocument("cuánto cobran", "precio");
classifier.addDocument("cuánto cuesta el servicio", "precio");
classifier.addDocument("precios", "precio");
classifier.addDocument("tarifas", "precio");
classifier.addDocument("valores", "precio");
classifier.addDocument("costos", "precio");

classifier.addDocument("prices", "precio");
classifier.addDocument("rates", "precio");
classifier.addDocument("how much do you charge", "precio");
classifier.addDocument("service price", "precio");
classifier.addDocument("cost", "precio");


// SOPORTE
classifier.addDocument("necesito ayuda", "soporte");
classifier.addDocument("tengo un problema", "soporte");
classifier.addDocument("me pueden ayudar", "soporte");
classifier.addDocument("soporte técnico", "soporte");
classifier.addDocument("no funciona", "soporte");
classifier.addDocument("error", "soporte");
classifier.addDocument("fallo", "soporte");

classifier.addDocument("I need help", "soporte");
classifier.addDocument("I have a problem", "soporte");
classifier.addDocument("technical support", "soporte");
classifier.addDocument("it's not working", "soporte");
classifier.addDocument("error", "soporte");
classifier.addDocument("failure", "soporte");


// 📱 WHATSAPP
classifier.addDocument("whatsapp", "whatsapp");
classifier.addDocument("escríbanme por whatsapp", "whatsapp");
classifier.addDocument("tienen whatsapp", "whatsapp");
classifier.addDocument("quiero hablar por whatsapp", "whatsapp");
classifier.addDocument("número de whatsapp", "whatsapp");
classifier.addDocument("manden su whatsapp", "whatsapp");

classifier.addDocument("whatsapp", "whatsapp");
classifier.addDocument("message me on whatsapp", "whatsapp");
classifier.addDocument("do you have whatsapp", "whatsapp");
classifier.addDocument("whatsapp number", "whatsapp");
classifier.addDocument("send me your whatsapp", "whatsapp");


// --- FOTOGRAFÍA ---
classifier.addDocument("fotografía", "servicio_fotografia");
classifier.addDocument("fotos profesionales", "servicio_fotografia");
classifier.addDocument("sesión de fotos", "servicio_fotografia");
classifier.addDocument("fotógrafo", "servicio_fotografia");
classifier.addDocument("fotografía de productos", "servicio_fotografia");
classifier.addDocument("fotografía corporativa", "servicio_fotografia");
classifier.addDocument("fotografía para eventos", "servicio_fotografia");

classifier.addDocument("photography", "servicio_fotografia");
classifier.addDocument("professional photos", "servicio_fotografia");
classifier.addDocument("photo session", "servicio_fotografia");
classifier.addDocument("photographer", "servicio_fotografia");
classifier.addDocument("product photography", "servicio_fotografia");
classifier.addDocument("corporate photography", "servicio_fotografia");
classifier.addDocument("event photography", "servicio_fotografia");

// --- DISEÑO ---
classifier.addDocument("diseño", "servicio_diseno");
classifier.addDocument("diseño gráfico", "servicio_diseno");
classifier.addDocument("logos", "servicio_diseno");
classifier.addDocument("diseño de marca", "servicio_diseno");
classifier.addDocument("branding", "servicio_diseno");
classifier.addDocument("diseño publicitario", "servicio_diseno");
classifier.addDocument("creación de imagen visual", "servicio_diseno");

classifier.addDocument("design", "servicio_diseno");
classifier.addDocument("graphic design", "servicio_diseno");
classifier.addDocument("logos", "servicio_diseno");
classifier.addDocument("brand design", "servicio_diseno");
classifier.addDocument("branding", "servicio_diseno");
classifier.addDocument("visual identity", "servicio_diseno");
classifier.addDocument("advertising design", "servicio_diseno");

// --- SERVICIOS WEB ---
classifier.addDocument("páginas web", "servicio_web");
classifier.addDocument("sitios web", "servicio_web");
classifier.addDocument("diseño web", "servicio_web");
classifier.addDocument("desarrollo web", "servicio_web");
classifier.addDocument("hosting", "servicio_web");
classifier.addDocument("dominio", "servicio_web");
classifier.addDocument("crear una página", "servicio_web");
classifier.addDocument("hospedaje web", "servicio_web");

classifier.addDocument("websites", "servicio_web");
classifier.addDocument("web design", "servicio_web");
classifier.addDocument("web development", "servicio_web");
classifier.addDocument("hosting", "servicio_web");
classifier.addDocument("domain", "servicio_web");
classifier.addDocument("create a website", "servicio_web");

// --- VIDEO CORPORATIVO ---
classifier.addDocument("video", "servicio_video");
classifier.addDocument("video corporativo", "servicio_video");
classifier.addDocument("videos empresariales", "servicio_video");
classifier.addDocument("producción de video", "servicio_video");
classifier.addDocument("grabación", "servicio_video");
classifier.addDocument("filmación", "servicio_video");
classifier.addDocument("edición de video", "servicio_video");

classifier.addDocument("video", "servicio_video");
classifier.addDocument("corporate video", "servicio_video");
classifier.addDocument("business videos", "servicio_video");
classifier.addDocument("video production", "servicio_video");
classifier.addDocument("recording", "servicio_video");
classifier.addDocument("editing", "servicio_video");


// --- STREAMING ---
classifier.addDocument("streaming", "servicio_streaming");
classifier.addDocument("transmisión en vivo", "servicio_streaming");
classifier.addDocument("eventos en vivo", "servicio_streaming");
classifier.addDocument("live", "servicio_streaming");
classifier.addDocument("stream", "servicio_streaming");
classifier.addDocument("video en directo", "servicio_streaming");
classifier.addDocument("broadcast", "servicio_streaming");

classifier.addDocument("streaming", "servicio_streaming");
classifier.addDocument("live streaming", "servicio_streaming");
classifier.addDocument("live event", "servicio_streaming");
classifier.addDocument("broadcast", "servicio_streaming");
classifier.addDocument("live video", "servicio_streaming");


// --- MULTIMEDIA / CONTENIDO ---
classifier.addDocument("contenido", "servicio_multimedia");
classifier.addDocument("producción de contenido", "servicio_multimedia");
classifier.addDocument("videos animados", "servicio_multimedia");
classifier.addDocument("animaciones", "servicio_multimedia");
classifier.addDocument("audiovisual", "servicio_multimedia");
classifier.addDocument("edición multimedia", "servicio_multimedia");

classifier.addDocument("content", "servicio_multimedia");
classifier.addDocument("content production", "servicio_multimedia");
classifier.addDocument("animated videos", "servicio_multimedia");
classifier.addDocument("animation", "servicio_multimedia");
classifier.addDocument("audiovisual", "servicio_multimedia");


// --- SERVICIOS ---
classifier.addDocument("qué servicios ofrecen", "servicios");
classifier.addDocument("qué hacen", "servicios");
classifier.addDocument("qué tipo de trabajo hacen", "servicios");
classifier.addDocument("qué ofrecen", "servicios");
classifier.addDocument("qué pueden hacer por mí", "servicios");
classifier.addDocument("servicios disponibles", "servicios");
classifier.addDocument("servicios de marketing", "servicios");

classifier.addDocument("services", "servicios");
classifier.addDocument("what do you offer", "servicios");
classifier.addDocument("what services do you provide", "servicios");
classifier.addDocument("what do you do", "servicios");
classifier.addDocument("marketing services", "servicios");

classifier.train();

let userName = null;
let askedName = false;

function extractName(msg) {
    const patterns = [
        /me llamo\s+([a-záéíóúñ ]+)/i,
        /mi nombre es\s+([a-záéíóúñ ]+)/i,
        /i am\s+([a-z ]+)/i,
        /i'm\s+([a-z ]+)/i,
        /my name is\s+([a-z ]+)/i
    ];

    for (const p of patterns) {
        const match = msg.match(p);
        if (match) {
            return match[1].trim();
        }
    }
    return null;
}


export function detectLanguage(text) {
    if (!text) return "es";

    const t = text.toLowerCase();

    const esWords = [
        "hola","buenos","buenas","dónde","como","qué","cuál","para",
        "gracias","ayuda","precio","servicio","cotización","quiero",
        "necesito","ustedes","hacen","ofrecen","página","diseño"
    ];

    const enWords = [
        "hello","hi","where","how","what","which","please","thanks",
        "help","price","service","quote","need","you","offer","page",
        "design","web","photo"
    ];

    const spanishChars = ["á","é","í","ó","ú","ñ","¿","¡"];

    let scoreES = 0;
    let scoreEN = 0;

    if (spanishChars.some(c => t.includes(c))) {
        scoreES += 4; 
    }

    esWords.forEach(w => t.includes(w) && (scoreES += 2));
    enWords.forEach(w => t.includes(w) && (scoreEN += 2));

    const englishPatterns = [
        /\b(i need|i want|can you|do you|please|thank you)\b/,
        /\b(how much|how can|what is)\b/
    ];

    englishPatterns.forEach(p => p.test(t) && (scoreEN += 3));

    const spanishPatterns = [
        /\b(cuánto cuesta|cómo puedo|me pueden|dónde están)\b/,
        /\b(quiero|necesito|me gustaría)\b/
    ];

    spanishPatterns.forEach(p => p.test(t) && (scoreES += 3));

    if (t.length <= 3) {
        if (["hi", "ok", "yes", "no"].includes(t)) return "en";
        if (["si", "hola"].includes(t)) return "es";
    }

    if (scoreES > scoreEN) return "es";
    if (scoreEN > scoreES) return "en";

    if (/[a-z]/.test(t) && !/[áéíóúñ]/.test(t)) return "en";
    return "es"; 
}


export function getBotReply(message) {
    if (!message || message.trim() === "") {
        return respuestas.es.default;
    }

    const msg = message.toLowerCase().trim();
    const lang = detectLanguage(msg);

    if (!userName && !askedName) {
        askedName = true;

        return lang === "es"
            ? "Para poder ayudarte mejor, ¿cómo te llamas?"
            : "To assist you better, what is your name?";
    }

    if (!userName && askedName) {
        const name = extractName(msg) || msg.split(" ")[0];

        if (name && name.length > 1) {
            userName = name.charAt(0).toUpperCase() + name.slice(1);

            return lang === "es"
                ? `¡Mucho gusto, ${userName}! 😊\nAhora sí, dime: ¿en qué puedo ayudarte?`
                : `Nice to meet you, ${userName}! 😊\nNow tell me, how can I help you?`;
        }
    }

    const keywordIntent = detectarClaves(msg, lang);
    if (keywordIntent && respuestas[lang][keywordIntent]) {
        return respuestas[lang][keywordIntent].replace("{nombre}", userName || "");
    }

    const result = classifier.getClassifications(msg)[0];
    const intent = result?.label;

    if (intent && respuestas[lang][intent]) {
        return respuestas[lang][intent].replace("{nombre}", userName || "");
    }

    return respuestas[lang].default.replace("{nombre}", userName || "");
}
