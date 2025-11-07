import mongoose from "mongoose";
const { Schema } = mongoose;

const sectionSchema = new Schema({
    doc: { type: String, required: true, unique: true, inmutable: true }, 
    nav: { type: Object },
    fotografia: { type: Object },
    diseno: { type: Object },
    contenido: { type: Object },
    web: { type: Object },
    video: { type: Object },
    streaming: { type: Object },
    footer: { type: Object }
}, { collection: "Info" }); 

export default mongoose.model("SectionPage", sectionSchema);
