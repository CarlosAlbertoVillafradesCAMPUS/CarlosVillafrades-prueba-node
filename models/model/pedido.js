import { sequelize } from "../../db/connect.js"
import { DataTypes } from "sequelize"

export const pedidoModel = sequelize.define("pedidos",
{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    instrucciones:{
        type:DataTypes.STRING(50),
    },
    entrega_fecha:{
        type:DataTypes.DATE,
    },
    valor_productos:{
        type:DataTypes.DECIMAL(12,3),
        allowNull:false
    },
    valor_envio:{
        type:DataTypes.DECIMAL(10,3),
        allowNull:false
    },
    valor_descuento:{
        type:DataTypes.DECIMAL(12,3),
        allowNull:false
    },
    valor_cupon:{
        type:DataTypes.DECIMAL(11,3),
        allowNull:false
    },
    impuestos:{
        type:DataTypes.TINYINT,
    },
    valor_impuestos:{
        type:DataTypes.DECIMAL(11,3),
    },
    valor_final:{
        type:DataTypes.DECIMAL(12,3),
    },
    calificacion:{
        type:DataTypes.DECIMAL(3,2),
    },
    id_tienda:{
        type:DataTypes.SMALLINT.UNSIGNED,
    },
    direccion:{
        type:DataTypes.STRING(160),
    },
    valor_comision:{
        type:DataTypes.DECIMAL(11,3),
    },
    id_user:{
        type:DataTypes.MEDIUMINT.UNSIGNED,
    }
}, {
    timestamps:false,
    tableName:"pedidos"
})