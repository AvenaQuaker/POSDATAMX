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

// UBICACIÓN
classifier.addDocument("dónde están ubicados", "ubicacion");
classifier.addDocument("dónde se encuentran", "ubicacion");
classifier.addDocument("dirección", "ubicacion");
classifier.addDocument("ubicación", "ubicacion");
classifier.addDocument("cómo llegar", "ubicacion");
classifier.addDocument("en qué ciudad están", "ubicacion");
classifier.addDocument("dónde queda posdatamx", "ubicacion");

// CONTACTO
classifier.addDocument("cómo puedo contactarlos", "contacto");
classifier.addDocument("contacto", "contacto");
classifier.addDocument("tienen correo", "contacto");
classifier.addDocument("me podrían dar su teléfono", "contacto");
classifier.addDocument("tienen redes sociales", "contacto");
classifier.addDocument("cómo los encuentro", "contacto");
classifier.addDocument("atención al cliente", "contacto");

// COTIZACIÓN
classifier.addDocument("quiero una cotización", "cotizacion");
classifier.addDocument("puedo pedir una cotización", "cotizacion");
classifier.addDocument("necesito presupuesto", "cotizacion");
classifier.addDocument("cuánto cuesta", "cotizacion");
classifier.addDocument("me pueden cotizar", "cotizacion");
classifier.addDocument("precio del servicio", "cotizacion");
classifier.addDocument("quiero cotizar un trabajo", "cotizacion");

// PRECIO
classifier.addDocument("cuánto cobran", "precio");
classifier.addDocument("cuánto cuesta el servicio", "precio");
classifier.addDocument("precios", "precio");
classifier.addDocument("tarifas", "precio");
classifier.addDocument("valores", "precio");
classifier.addDocument("costos", "precio");

// SOPORTE
classifier.addDocument("necesito ayuda", "soporte");
classifier.addDocument("tengo un problema", "soporte");
classifier.addDocument("me pueden ayudar", "soporte");
classifier.addDocument("soporte técnico", "soporte");
classifier.addDocument("no funciona", "soporte");
classifier.addDocument("error", "soporte");
classifier.addDocument("fallo", "soporte");

// 📱 WHATSAPP
classifier.addDocument("whatsapp", "whatsapp");
classifier.addDocument("escríbanme por whatsapp", "whatsapp");
classifier.addDocument("tienen whatsapp", "whatsapp");
classifier.addDocument("quiero hablar por whatsapp", "whatsapp");
classifier.addDocument("número de whatsapp", "whatsapp");
classifier.addDocument("manden su whatsapp", "whatsapp");

// --- FOTOGRAFÍA ---
classifier.addDocument("fotografía", "servicio_fotografia");
classifier.addDocument("fotos profesionales", "servicio_fotografia");
classifier.addDocument("sesión de fotos", "servicio_fotografia");
classifier.addDocument("fotógrafo", "servicio_fotografia");
classifier.addDocument("fotografía de productos", "servicio_fotografia");
classifier.addDocument("fotografía corporativa", "servicio_fotografia");
classifier.addDocument("fotografía para eventos", "servicio_fotografia");

// --- DISEÑO ---
classifier.addDocument("diseño", "servicio_diseno");
classifier.addDocument("diseño gráfico", "servicio_diseno");
classifier.addDocument("logos", "servicio_diseno");
classifier.addDocument("diseño de marca", "servicio_diseno");
classifier.addDocument("branding", "servicio_diseno");
classifier.addDocument("diseño publicitario", "servicio_diseno");
classifier.addDocument("creación de imagen visual", "servicio_diseno");

// --- SERVICIOS WEB ---
classifier.addDocument("páginas web", "servicio_web");
classifier.addDocument("sitios web", "servicio_web");
classifier.addDocument("diseño web", "servicio_web");
classifier.addDocument("desarrollo web", "servicio_web");
classifier.addDocument("hosting", "servicio_web");
classifier.addDocument("dominio", "servicio_web");
classifier.addDocument("crear una página", "servicio_web");
classifier.addDocument("hospedaje web", "servicio_web");

// --- VIDEO CORPORATIVO ---
classifier.addDocument("video", "servicio_video");
classifier.addDocument("video corporativo", "servicio_video");
classifier.addDocument("videos empresariales", "servicio_video");
classifier.addDocument("producción de video", "servicio_video");
classifier.addDocument("grabación", "servicio_video");
classifier.addDocument("filmación", "servicio_video");
classifier.addDocument("edición de video", "servicio_video");

// --- STREAMING ---
classifier.addDocument("streaming", "servicio_streaming");
classifier.addDocument("transmisión en vivo", "servicio_streaming");
classifier.addDocument("eventos en vivo", "servicio_streaming");
classifier.addDocument("live", "servicio_streaming");
classifier.addDocument("stream", "servicio_streaming");
classifier.addDocument("video en directo", "servicio_streaming");
classifier.addDocument("broadcast", "servicio_streaming");

// --- MULTIMEDIA / CONTENIDO ---
classifier.addDocument("contenido", "servicio_multimedia");
classifier.addDocument("producción de contenido", "servicio_multimedia");
classifier.addDocument("videos animados", "servicio_multimedia");
classifier.addDocument("animaciones", "servicio_multimedia");
classifier.addDocument("audiovisual", "servicio_multimedia");
classifier.addDocument("edición multimedia", "servicio_multimedia");

// --- SERVICIOS ---
classifier.addDocument("qué servicios ofrecen", "servicios");
classifier.addDocument("qué hacen", "servicios");
classifier.addDocument("qué tipo de trabajo hacen", "servicios");
classifier.addDocument("qué ofrecen", "servicios");
classifier.addDocument("qué pueden hacer por mí", "servicios");
classifier.addDocument("servicios disponibles", "servicios");
classifier.addDocument("servicios de marketing", "servicios");

classifier.train();

export function getBotReply(message) {
  if (!message || message.trim() === "") {
    return "Por favor escribe algo";
  }

  const lowerMsg = message.toLowerCase();
  const keywordIntent = detectarClaves(lowerMsg);
  if (keywordIntent && respuestas[keywordIntent]) {
    return respuestas[keywordIntent]; 
  }

  const classifications = classifier.getClassifications(lowerMsg);
  const top = classifications.slice(0, 2);

  if (top.length >= 2 && Math.abs(top[0].value - top[1].value) < 0.15) {
    const fallbackIntent = detectarClaves(lowerMsg);
    if (fallbackIntent && respuestas[fallbackIntent]) {
      return respuestas[fallbackIntent];
    }
  }

  const intent = top[0]?.label;
  return respuestas[intent] || respuestas.default;
}
