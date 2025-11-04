import SectionPage from "../Schemas/sectionSchema.js";

export async function getSectionPage(lang, section) {
    try {
        const page = await SectionPage.findOne({ doc: `sec-${lang}` }).lean();
        if (!page) return null;

        return {
            nav: page.nav,
            sec: page[section],
            footer: page.footer
        };
    } catch (error) {
        console.error("Error al obtener sección:", error);
        return null;
    }
}
