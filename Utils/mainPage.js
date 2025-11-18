import MainPage from "../Schemas/mainSchema.js"

export async function getMainPage(lang) {
    try {
        const page = await MainPage.findOne({ doc: lang }).lean();
        return page || null;
    } catch (error) {
        console.error("Error al obtener página principal:", error);
        return null;
    }
}