import { Router } from "express";
import criarSugestoes from "../controllers/controller.js";

const router = Router();

router.post('/', criarSugestoes);

export default router;