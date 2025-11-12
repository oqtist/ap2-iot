import { database } from "../database.js";
import { DataTypes } from "sequelize";
import { Usuarios } from "./usuario.js";

database.define()

const Relatorios = database.define('Relatorios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    prompt: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        schema: 'public',
        freezeTableName: true,
        timestamps: false
    }
)

Usuarios.hasMany(Relatorios, {
    foreignKey: {
        allowNull: false,
        name: "id_usuario"
    }
})

export { Relatorios }