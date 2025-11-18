import mongoose from "mongoose";
const { Schema } = mongoose;

const loginSchema = new Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
}, { collection: "Login" });

export default mongoose.model("Login", loginSchema);
