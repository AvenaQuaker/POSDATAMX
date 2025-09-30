import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mainRoutes from "./Routes/Routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "./wwwroot")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./Views"));

app.use("/", mainRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
