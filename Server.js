import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// __dirname con ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Archivos estáticos
app.use(express.static(path.join(__dirname, "wwwroot")));

// Configuración de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

// Cargar traducciones
const translations = {
  en: JSON.parse(fs.readFileSync(path.join(__dirname, "Config/en.json"))),
  es: JSON.parse(fs.readFileSync(path.join(__dirname, "Config/es.json")))
};

// Detectar idioma del navegador
function detectLanguage(req) {
  const acceptLang = req.headers["accept-language"];
  if (!acceptLang) return "en";

  // ej: "es-MX,es;q=0.9,en;q=0.8" → "es"
  const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
  return translations[preferred] ? preferred : "en";
}

// Ruta principal
app.get("*", (req, res) => {
  const lang = detectLanguage(req);
  res.render("index", { translations: translations[lang], lang });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
