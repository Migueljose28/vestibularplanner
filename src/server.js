import express from "express";
import cronogramaRoutes from "./routes/cronogramaRoutes.js";
//import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());

// Configuração do CORS (agora chamada apenas uma vez)
app.use(
  cors({
    origin: "*", // Permite apenas requisições desse domínio
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Cabeçalhos permitidos
  })
);

// Rotas
app.use("/cronograma", cronogramaRoutes);
//app.use("/users", userRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
