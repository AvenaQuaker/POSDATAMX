import { Router } from "express";
import langs from "../Utils/translations.js";
import { detectLanguage } from "../Middlewares/Lang.js";

const router = Router();

router.get("/:lang", (req, res) => {
    const lang = req.params.lang.toLowerCase();

    if (!langs.translations[lang]) {
        const detected = detectLanguage(req);
        return res.redirect(`/${detected}`);
    }

    res.render("index", { translations: langs.translations[lang], lang });
});

router.get("/Servicios/:lang/:seccion?", (req, res) => {
    const lang = req.params.lang.toLowerCase();
    const seccion = req.params.seccion || "fotografia";

    if (!langs.sec_translations[lang]) {
        const detected = detectLanguage(req);
        console.log(detected);
        return res.redirect(`/Servicios/${detected}/${seccion}`);
    }

    switch (seccion.toLowerCase()) {
        case 'fotografia':
            return res.render("section1", { translations: langs.sec_translations[lang], lang });
        case 'diseno':
            return res.render("section2", { translations: langs.sec_translations[lang], lang });
        case 'multimedia':
            return res.render("section3", { translations: langs.sec_translations[lang], lang });
        case 'hosting':
            return res.render("section4", { translations: langs.sec_translations[lang], lang });
        case 'publicidad':
            return res.render("section5", { translations: langs.sec_translations[lang], lang });
        default:
            return res.render("section1", { translations: langs.sec_translations[lang], lang });
    }
});


router.get("/", (req, res) => {
    const lang = detectLanguage(req);
    res.redirect(`/${lang}`);
});

router.get("/Servicios", (req, res) => {
    const lang = detectLanguage(req);
    console.log(lang);
    return res.redirect(`/Servicios/es/`);
});


export default router;
