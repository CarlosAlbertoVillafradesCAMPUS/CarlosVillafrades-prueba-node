import { Router } from "express";
import { productoController } from "../controllers/producto.js";

const appProducto = Router()

appProducto.get("/productos", productoController.getProducts)

export default appProducto