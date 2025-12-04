const WHATSAPP_LINK = "https://wa.me/5218671006263";

export const respuestas = {
    es: {
        saludo: `
👋 ¡Hola {nombre}! Soy el asistente virtual de **POSDATAMX**.  
Estoy aquí para ayudarte con cualquier duda sobre nuestros servicios, cotizaciones o contacto.  
Puedes preguntarme cosas como:
- “¿Qué servicios ofrecen?”
- “¿Dónde están ubicados?”
- “¿Puedo pedir una cotización?”
`,

        ubicacion: `
📍 {nombre}, Nuestra oficina está ubicada en el **Hotel Real Inn**,  
en **Av. Reforma 5430, Nuevo Laredo, Tamaulipas, México**.

🕓 Horarios:  
Lunes a Viernes — **9:00 AM a 6:00 PM**  
Sábados — **9:00 AM a 2:00 PM**

Puedes visitarnos o agendar una cita por WhatsApp.
`,

        contacto: `
📞 ¡Claro {nombre}! Puedes contactarnos:  
- **Correo:** contacto@posdatamx.com  
- **Teléfono:** +52 867 100 6263  
- **Redes Sociales:** @posdatamx (Instagram, Facebook, LinkedIn)

📱 WhatsApp directo:  
👉 ${WHATSAPP_LINK}
`,

        cotizacion: `
💼 Con gusto te apoyamos con una cotización {nombre}.  
Puedes hablar con un asesor aquí:  
👉 ${WHATSAPP_LINK}
`,

        precio: `
💰 Los precios dependen del proyecto.  
Para darte un costo exacto, contáctanos aquí {nombre}:  
👉 ${WHATSAPP_LINK}
`,

        soporte: `
🧰 ¡Puedo ayudarte {nombre}!  
Por favor dime brevemente qué ocurre para dirigirte con el área correcta.
`,

        whatsapp: `
📱 Puedes comunicarte directamente mediante WhatsApp:  
👉 ${WHATSAPP_LINK}

Ahí te atenderá un asesor en tiempo real {nombre}.
`,

        servicios: `
💼 En **POSDATAMX** ofrecemos:

📸 Fotografía profesional  
🎨 Diseño gráfico  
🌐 Desarrollo web  
🎬 Video corporativo  
📡 Streaming profesional  
🧩 Producción de contenido multimedia

¿Sobre cuál servicio quieres saber más {nombre}?
`,

        servicio_fotografia: `
📸 **Fotografía Profesional**  
- Productos y catálogos  
- Eventos  
- Retratos corporativos  
- Edición profesional  
`,

        servicio_diseno: `
🎨 **Diseño Gráfico / Branding**  
- Identidad visual  
- Logos  
- Publicidad digital  
- Material empresarial  
`,

        servicio_web: `
🌐 **Desarrollo Web**  
- Sitios a medida  
- Hosting  
- SEO  
- Mantenimiento  
`,

        servicio_video: `
🎬 **Video Corporativo**  
- Spots promocionales  
- Entrevistas  
- Reels  
- Edición profesional  
`,

        servicio_streaming: `
📡 **Streaming Profesional**  
- Multicámara  
- YouTube / Facebook / Twitch  
- Producción en tiempo real  
`,

        servicio_multimedia: `
🧩 **Contenido Multimedia**  
- Motion graphics  
- Videos explicativos  
- Edición creativa  
`,

        default: `
🤔 No entendí bien tu mensaje {nombre}.  
Puedes preguntarme por:
• Fotografía  
• Diseño  
• Web  
• Video  
• Streaming  
• Precios  
• Ubicación

O si prefieres, puedo pasarte con un asesor.
`
    },

    // ====== INGLÉS ======
    en: {
        saludo: `
👋 Hello {nombre}!  I’m the virtual assistant from **POSDATAMX**.  
I can help you with services, quotes or general information.

You can ask things like:
- “What services do you offer?”
- “Where are you located?”
- “Can I request a quote?”
`,

        ubicacion: `
📍 {nombre}, Our main office is located at **Hotel Real Inn**,  
**Av. Reforma 5430, Nuevo Laredo, Tamaulipas, Mexico**.

🕓 Business hours:  
Monday–Friday — **9:00 AM to 6:00 PM**  
Saturday — **9:00 AM to 2:00 PM**

Feel free to visit us or schedule an appointment on WhatsApp.
`,

        contacto: `
📞 {nombre}, You can contact us through:  
- **Email:** contacto@posdatamx.com  
- **Phone:** +52 867 100 6263  
- **Social Media:** @posdatamx (Instagram, Facebook, LinkedIn)

📱 Direct WhatsApp chat:  
👉 ${WHATSAPP_LINK}
`,

        cotizacion: `
💼 Sure {nombre}! We can help you with a full quote.  
You can speak directly with an advisor here:  
👉 ${WHATSAPP_LINK}
`,

        precio: `
💰 Prices depend on the project.  
For exact numbers, talk with an advisor {nombre}:  
👉 ${WHATSAPP_LINK}
`,

        soporte: `
🧰 I can assist you {nombre}!  
Tell me briefly what issue you're having.
`,

        whatsapp: `
📱 You can contact us directly using WhatsApp:  
👉 ${WHATSAPP_LINK}

An advisor will assist you instantly {nombre}.
`,

        servicios: `
💼 At **POSDATAMX** we offer:

📸 Professional Photography  
🎨 Graphic Design  
🌐 Web Development  
🎬 Corporate Video  
📡 Professional Streaming  
🧩 Multimedia Content

Which service would you like to know more about {nombre}?
`,

        servicio_fotografia: `
📸 **Professional Photography**  
- Product shoots  
- Corporate portraits  
- Event photography  
- Professional editing  
`,

        servicio_diseno: `
🎨 **Graphic Design & Branding**  
- Visual identity  
- Logo creation  
- Ads & marketing materials  
`,

        servicio_web: `
🌐 **Web Development**  
- Custom websites  
- Hosting  
- SEO optimization  
- Maintenance  
`,

        servicio_video: `
🎬 **Corporate Video Production**  
- Promotional videos  
- Interviews  
- Social media content  
- Professional editing  
`,

        servicio_streaming: `
📡 **Professional Live Streaming**  
- Multicamera  
- Multi-platform broadcasts  
- Real-time production  
`,

        servicio_multimedia: `
🧩 **Multimedia Production**  
- Motion graphics  
- Explainer videos  
- Creative editing  
`,

        default: `
🤔 I didn’t fully understand your message {nombre}.  
You can ask about:
• Photography  
• Design  
• Web  
• Video  
• Streaming  
• Prices  
• Location

Or I can connect you with a human advisor.
`
    }
};
