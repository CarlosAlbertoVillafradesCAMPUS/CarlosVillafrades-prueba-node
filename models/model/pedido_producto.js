import { sequelize } from "../../db/connect.js"
import { DataTypes } from "sequelize"

export const pedidoProductoModel = sequelize.define("pedidos_productos",
{
    id:{
        type: DataTypes.MEDIUMINT.UNSIGNED,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    cantidad:{
        type:DataTypes.DECIMAL(9,3),
    },
    valor_unitario:{
        type:DataTypes.DECIMAL(11,3).UNSIGNED,
    },
    valor_unitario_promocion:{
        type:DataTypes.DECIMAL(11,3).UNSIGNED,
    },
    total_teorico:{
        type:DataTypes.DECIMAL(12,3).UNSIGNED,
    },
    total_final:{
        type:DataTypes.DECIMAL(12,3).UNSIGNED,
    },
    id_promocion:{
        type:DataTypes.MEDIUMINT.UNSIGNED,
    },
    id_producto:{
        type:DataTypes.INTEGER.UNSIGNED,
    },
    id_pedido:{
        type:DataTypes.MEDIUMINT.UNSIGNED,
    }
}, {
    timestamps:false,
    tableName:"pedidos_productos"
})