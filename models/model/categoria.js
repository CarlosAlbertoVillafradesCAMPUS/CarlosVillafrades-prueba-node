import { sequelize } from "../../db/connect.js"
import { DataTypes } from "sequelize"

export const categoriaModel = sequelize.define("categorias",
{
    id:{
        type: DataTypes.SMALLINT.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING(30),
    },
    adultos:{
        type:DataTypes.TINYINT.UNSIGNED,
    }
}, {
    timestamps:false,
    tableName:"categorias"
})