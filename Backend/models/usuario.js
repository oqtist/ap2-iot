import { database } from "../database.js";
import { DataTypes } from "sequelize";

database.define()

const Usuarios = database.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100)
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(255)
    },
    perfil: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
},
    {
        schema: 'public',
        freezeTableName: true,
        timestamps: false
    }
)

export { Usuarios }