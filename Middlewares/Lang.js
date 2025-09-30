import translations from "../Utils/translations.js";

export function detectLanguage(req) {
    const acceptLang = req.headers["accept-language"];
    if (!acceptLang) return "en";

    const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
    return translations[preferred] ? preferred : "en";
}
