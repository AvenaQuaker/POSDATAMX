import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mainRoutes from "./Routes/Routes.js";
import contactRouter from "./Routes/Contact.js";
import adminRouter from "./Routes/admin.js";
import botRouter from "./Routes/bot.js";
import moongose from "mongoose";
import dotenv from "dotenv";
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { botWhatsapp } from "./Bot/whatsapp.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

moongose.connect(process.env.MONGODB_URI)
.then(() => console.log("✅ Conectado a MongoDB Atlas"))
.catch((err) => console.error("Error al conectar con MongoDB:", err));

app.use(session({
  secret: process.env.SESSION_SECRET || 'clave-super-secreta',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  cookie: { 
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
    sameSite: 'lax'
  }
}));

app.use(express.static(path.join(__dirname, "./wwwroot")));
app.use('/aos', express.static('./node_modules/aos/dist'));
app.use('/sweetalert2', express.static('./node_modules/sweetalert2/dist'));
app.use('/json', express.static('./node_modules/jsoneditor/dist'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./Views"));

app.use("/bot",botRouter)
app.use("/admin", adminRouter);
app.use("/", contactRouter);
app.use("/", mainRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  // try {
  //   botWhatsapp();
  // } catch (err) {
  //     console.error("❌ Error al iniciar el bot:", err);
  //}
});
