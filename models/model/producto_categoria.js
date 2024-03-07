import { sequelize } from "../../db/connect.js"
import { DataTypes } from "sequelize"

export const productoCategoriaModel = sequelize.define("productos_categorias",
{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    id_categoria:{
        type:DataTypes.SMALLINT.UNSIGNED,
    },
    id_producto:{
        type:DataTypes.INTEGER.UNSIGNED,
    }
}, {
    timestamps:false,
    tableName:"productos_categorias"
})