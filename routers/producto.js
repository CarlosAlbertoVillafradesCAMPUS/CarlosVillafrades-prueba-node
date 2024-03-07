import { Router } from "express";
import { categoriaController } from "../controllers/categoria.js";

const appCategoria = Router()

appCategoria.get("/categorias", categoriaController.getCategoria)

export default appCategoria;