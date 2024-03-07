import { Router } from "express";
import { productoController } from "../controllers/producto.js";

const appProducto = Router()

appProducto.get("/productos", productoController.getProducts)
appProducto.get("/productos/mas-vendidos", productoController.getProductsVendidos)

export default appProducto