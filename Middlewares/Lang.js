export function detectLanguage(req) {
    const acceptLang = req.headers["accept-language"];
    if (!acceptLang) return "es";
    const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
    return preferred;
}
