import { sequelize } from "../../db/connect.js"
import { DataTypes } from "sequelize"

export const productoModel = sequelize.define("productos",
{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    estado:{
        type:DataTypes.TINYINT.UNSIGNED,
    },
    kit:{
        type:DataTypes.TINYINT.UNSIGNED,
    },
    barcode:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    nombre:{
        type:DataTypes.STRING(60),
        allowNull:false
    },
    presentacion:{
        type:DataTypes.STRING(25),
    },
    descripcion:{
        type:DataTypes.STRING(500),
    },
    foto:{
        type:DataTypes.STRING(120),
    },
    peso:{
        type:DataTypes.DECIMAL(6,2),
    }
}, {
    timestamps:false,
    tableName:"productos"
})