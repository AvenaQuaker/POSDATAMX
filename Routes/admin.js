import express from "express";
import MainPage from "../Schemas/mainSchema.js";
import SectionPage from "../Schemas/sectionSchema.js";
import Login from "../Schemas/adminSchema.js";
import { requireLogin } from "../Middlewares/Auth.js";

const router = express.Router();

router.get("/login", (req, res) => {
    res.render("admin");
});

router.post("/login", async (req, res) => {
    const { user, password } = req.body;

    try {
        const admin = await Login.findOne({ user });

        if (!admin) {return res.status(404).json({ error: "Usuario no encontrado" })}
        if (admin.password !== password) {return res.status(401).json({ error: "Contraseña incorrecta" });}

        req.session.user = { name: user}; 
        res.json({success: true,redirect: "/admin/modulo"});

    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        res.status(500).send("Error del servidor");
    }
});

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Error al cerrar sesión:", err);
            return res.status(500).send("Error al cerrar sesión");
        }
        res.redirect("/admin/login");
    });
});

router.get("/modulo", requireLogin, (req, res) => {
    try {
        res.render("modulo");
    } catch (error) {
        console.error("Error al renderizar el módulo:", error);
        res.status(500).send("Error interno del servidor");
    }
});

router.get("/get/main/:lang", requireLogin, async (req, res) => {
    try {
        const lang = req.params.lang.toLowerCase();
        const data = await MainPage.findOne({ doc: lang }).lean();
        if (!data) return res.status(404).json({ error: "Documento no encontrado" });
        res.json(data);
    } catch (error) {
        console.error("Error al obtener main:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

router.get("/get/section/:lang", requireLogin, async (req, res) => {
    try {
        const lang = req.params.lang.toLowerCase();
        const data = await SectionPage.findOne({ doc: `sec-${lang}` }).lean();
        if (!data) return res.status(404).json({ error: "Documento no encontrado" });
        res.json(data);
    } catch (error) {
        console.error("Error al obtener section:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

router.put("/update/all", async (req, res) => {
    try {
        const { mainEs, mainEn, secEs, secEn } = req.body;

        if (!mainEs || !mainEn || !secEs || !secEn) {
            return res.status(400).json({ success: false, error: "Faltan datos en la solicitud" });
        }

        const updates = await Promise.all([
            MainPage.findOneAndUpdate({ doc: "es" }, { $set: mainEs }, { new: true, upsert: true }),
            MainPage.findOneAndUpdate({ doc: "en" }, { $set: mainEn }, { new: true, upsert: true }),
            SectionPage.findOneAndUpdate({ doc: "sec-es" }, { $set: secEs }, { new: true, upsert: true }),
            SectionPage.findOneAndUpdate({ doc: "sec-en" }, { $set: secEn }, { new: true, upsert: true })
        ]);

        res.json({ success: true, message: "Datos actualizados correctamente", updates });
    } catch (error) {
        console.error("Error al actualizar todo:", error);
        res.status(500).json({ success: false, error: "Error interno del servidor" });
    }
});



export default router;
