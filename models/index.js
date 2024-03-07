import { productoModel } from "./model/producto.js";
import { tiendaModel } from "./model/tienda.js";
import { productoStockModel } from "./model/producto_stock.js";

productoModel.belongsToMany(tiendaModel, {through: productoStockModel, foreignKey:"id_producto"})
tiendaModel.belongsToMany(productoModel, {through: productoStockModel, foreignKey:"id_tienda"})

/* //Relacion PRODUCTOS_STOCK Y PRODUCTOS
productoStockModel.belongsTo(productoModel, {foreignKey:"id_producto"})
productoModel.hasMany(productoStockModel, {foreignKey:"id_producto"})

//Relacion PRODUCTOS_STOCK Y TIENDAS
productoStockModel.belongsTo(tiendaModel, {foreignKey:"id_tienda"})
tiendaModel.hasMany(productoStockModel, {foreignKey:"id_tienda"}) */


export{
    productoModel,
    productoStockModel,
    tiendaModel
}