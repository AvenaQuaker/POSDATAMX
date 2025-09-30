import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translations = {
    en: JSON.parse(fs.readFileSync(path.join(__dirname, "../Config/en.json"))),
    es: JSON.parse(fs.readFileSync(path.join(__dirname, "../Config/es.json")))
};

const sec_translations = {
    en: JSON.parse(fs.readFileSync(path.join(__dirname, "../Config/sec-en.json"))),
    es: JSON.parse(fs.readFileSync(path.join(__dirname, "../Config/sec-es.json")))
};

export default { translations, sec_translations };
