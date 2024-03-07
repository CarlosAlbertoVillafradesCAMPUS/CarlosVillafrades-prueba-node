import {productoModel, categoriaModel, productoCategoriaModel} from "../models/index.js"
import { sequelize } from "../db/connect.js"
import { Op } from "sequelize"

export class categoriaController{
    static async getCategoria(req,res){
        try {
            const dataCategoria = await categoriaModel.findAll(
                {
                    include:{
                        model: productoModel,
                        attributes:[]
                    },
                    attributes:[["id", "idCategoria"], "nombre",  [sequelize.literal(`(SELECT COUNT(*) FROM productos_categorias WHERE id_categoria = categorias.id )`), 'cantProductos'] ],
                    order:[[sequelize.literal("cantProductos"), 'DESC']],
                }
            )

            res.status(200).json({status:200, message: "consultado correctamente", data: dataCategoria})
        } catch (error) {
            res.status(400).json({status:400, message: error.message})
        }
    }
}