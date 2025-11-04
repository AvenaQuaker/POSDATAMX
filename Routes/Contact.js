import express from 'express';
import { Resend } from 'resend';
import dotenv from "dotenv";
dotenv.config();

const resend = new Resend(process.env.RESEND_APIKEY);
const router = express.Router();

router.post("/enviarCorreo", async (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(nombre, email, mensaje);

    try {
        const { data, error } = await resend.emails.send({
        from: "POSDATAMX <onboarding@resend.dev>",
        to: process.env.MAIN_EMAIL,
        reply_to: email,
        subject: `Consulta de ${nombre}`,
        html: `
            <h2>Nuevo mensaje de ${nombre}</h2>
            <p><strong>Correo:</strong> ${email}</p>
            <p><strong>Mensaje:</strong><br>${mensaje}</p>
        `,
        });

        if (error) throw error;
        res.json({ success: true, data });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ success: false, error: 'Error al enviar el correo' });
    }
});

export default router;
