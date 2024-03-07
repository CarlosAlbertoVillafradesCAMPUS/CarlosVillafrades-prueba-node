import { sequelize } from "../../db/connect.js"
import { DataTypes } from "sequelize"

export const productoStockModel = sequelize.define("productos_stocks",
{
    id:{
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    cantidad:{
        type:DataTypes.DECIMAL(8,3),
    },
    id_tienda:{
        type:DataTypes.SMALLINT.UNSIGNED,
    },
    id_producto:{
        type:DataTypes.INTEGER.UNSIGNED,
    },
    fecha_ingreso:{
        type:DataTypes.DATE,
    }
}, {
    timestamps:false,
    tableName:"productos_stocks"
})