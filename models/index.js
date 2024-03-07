import { productoModel } from "./model/producto.js";
import { tiendaModel } from "./model/tienda.js";
import { productoStockModel } from "./model/producto_stock.js";
import { pedidoModel } from "./model/pedido.js";
import { pedidoProductoModel } from "./model/pedido_producto.js";

//relacion PRODUCTOS Y TIENDAS
productoModel.belongsToMany(tiendaModel, {through: productoStockModel, foreignKey:"id_producto"})
tiendaModel.belongsToMany(productoModel, {through: productoStockModel, foreignKey:"id_tienda"})

//relacion PRODUCTOS Y PEDIDOS
productoModel.belongsToMany(pedidoModel, {through: pedidoProductoModel, foreignKey:"id_producto"})
pedidoModel.belongsToMany(productoModel, {through: pedidoProductoModel, foreignKey:"id_pedido"})


/* //Relacion PRODUCTOS_STOCK Y PRODUCTOS
productoStockModel.belongsTo(productoModel, {foreignKey:"id_producto"})
productoModel.hasMany(productoStockModel, {foreignKey:"id_producto"})

//Relacion PRODUCTOS_STOCK Y TIENDAS
productoStockModel.belongsTo(tiendaModel, {foreignKey:"id_tienda"})
tiendaModel.hasMany(productoStockModel, {foreignKey:"id_tienda"}) */


export{
    productoModel,
    productoStockModel,
    tiendaModel,
    pedidoModel
}