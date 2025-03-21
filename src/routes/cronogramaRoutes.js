import express from "express";
import { criarCronograma, listarCronograma, modificarCronograma, deletarCronograma } from "../controllers/cronogramaController.js";

const router = express.Router();

router.post("/", criarCronograma);
router.get("/", listarCronograma);
router.put("/:id", modificarCronograma);
router.delete("/:id", deletarCronograma);

export default router;
