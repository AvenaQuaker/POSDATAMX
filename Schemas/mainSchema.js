import mongoose from "mongoose";
const { Schema } = mongoose;

const mainPageSchema = new Schema({
    doc: { type: String, required: true, unique: true, unique: true, inmutable: true },
    nav: { type: Object },
    inicio: { type: Object },
    acerca: { type: Object },
    servicios: { type: Object },
    contacto: { type: Object },
    galeria: { type: Object },
    equipo: { type: Object },
    noticias: { type: Object },
    testimonios: { type: Object },
    contactanos: { type: Object },
    footer: { type: Object }
}, { collection: "Info" });

export default mongoose.model("MainPage", mainPageSchema);
