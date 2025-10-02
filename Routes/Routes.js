import { Router } from "express";
import langs from "../Utils/translations.js";
import { detectLanguage } from "../Middlewares/Lang.js";


const router = Router();

router.get("/Servicios", (req, res) => {
    const lang = detectLanguage(req);
    return res.redirect(`/Servicios/${lang}/fotografia`);
});

router.get("/Servicios/:lang/:seccion?", (req, res) => {
    const lang = req.params.lang.toLowerCase();
    const seccion = req.params.seccion || "fotografia";

    if (!langs.sec_translations[lang]) {
        const detected = detectLanguage(req);
        return res.redirect(`/Servicios/${detected}/${seccion}`);
    }

    let text = {
        nav: langs.sec_translations[lang].nav,
        sec: langs.sec_translations[lang][seccion],
        footer: langs.sec_translations[lang].footer
    }

    res.render("section",{ translations:text, lang });
});

router.get("/:lang", (req, res) => {
    const lang = req.params.lang.toLowerCase();

    if (!langs.translations[lang]) {
        const detected = detectLanguage(req);
        return res.redirect(`/${detected}`);
    }

    res.render("index", { translations: langs.translations[lang], lang });
});


router.get("/", (req, res) => {
    const lang = detectLanguage(req);
    res.redirect(`/${lang}`);
});

export default router;
