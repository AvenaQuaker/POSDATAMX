import { Router } from "express";
import { detectLanguage } from "../Middlewares/Lang.js";
import { getMainPage } from "../Utils/mainPage.js";
import { getSectionPage } from "../Utils/sectionPage.js";

const router = Router();

router.get("/Servicios", (req, res) => {
    const lang = detectLanguage(req);
    return res.redirect(`/Servicios/${lang}/fotografia`);
});

router.get("/Servicios/:lang/:seccion?", async (req, res) => {
    const lang = req.params.lang.toLowerCase();
    const seccion = req.params.seccion || "fotografia";

    const sectionData = await getSectionPage(lang, seccion)

    if (!sectionData) {
        const detected = detectLanguage(req);
        return res.redirect(`/Servicios/${detected}/${seccion}`);
    }

    res.render("section",{ translations:sectionData, lang });
});

router.get("/:lang", async (req, res) => {
    const lang = req.params.lang.toLowerCase();
    const pageData = await getMainPage(lang);

    if(!pageData){
        const detected = detectLanguage(req);
        return res.redirect(`/${detected}`);
    }

    res.render("index", { translations: pageData, lang });
});


router.get("/", (req, res) => {
    const lang = detectLanguage(req);
    res.redirect(`/${lang}`);
});

export default router;
