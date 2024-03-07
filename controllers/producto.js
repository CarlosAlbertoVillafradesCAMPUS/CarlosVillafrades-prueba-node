import {productoModel, tiendaModel,pedidoModel, productoStockModel} from "../models/index.js"
import { sequelize } from "../db/connect.js"

export class productoController{
    static async getProducts(req,res){
        try {
            const dataProductos = await productoModel.findAll(
                {
                    include:{
                        model: tiendaModel,
                        attributes:[["id", "idTienda"], "nombre", [sequelize.literal(`(SELECT SUM(cantidad) FROM productos_stocks WHERE id_producto = productos.id AND id_tienda = tiendas.id )`), 'stock'] ],
                        through:{
                            attributes:[],
                        }
                    },
                    attributes:[["id", "idProducto"], "nombre", "presentacion"]
                }
            )

            res.status(200).json({status:200, message: "consultado correctamente", data: dataProductos})
        } catch (error) {
            res.status(400).json({status:400, message: error.message})
        }
    }

    static async getProductsVendidos(req,res){
        try {
            const dataProductos = await productoModel.findAll(
                {
                    include:{
                        model: pedidoModel,
                        attributes:[],
                    },
                    attributes:[["id", "idProducto"], "nombre", "presentacion", [sequelize.literal(`(SELECT SUM(cantidad) FROM pedidos_productos WHERE id_producto = productos.id AND id_pedido = pedidos.id)`), 'unidadesVendidas']],
                   limit:10
                    //order:[['unidadesVendidas', 'ASC']]
             }
            ) 

            res.status(200).json({status:200, message: "consultado correctamente", data: dataProductos})
        } catch (error) {
            res.status(400).json({status:400, message: error.message})
        }
    }
}