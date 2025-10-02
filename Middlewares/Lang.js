export function detectLanguage(req) {
    const acceptLang = req.headers["accept-language"];
    const preferred = acceptLang.split(",")[0].split("-")[0].toLowerCase();
    return preferred;
}
