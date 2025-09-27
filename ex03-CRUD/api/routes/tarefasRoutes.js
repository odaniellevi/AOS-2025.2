import express from "express";
import * as TarefasController from "../controllers/m/tarefasController.js";

const router = express.Router();

router.get("/tarefas", TarefasController.listarTarefas);
router.