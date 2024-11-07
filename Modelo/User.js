// revisar mongo o node a donde este residiuendo//
const { Model, DataTypes } = require('express');
const mongoose = require(´mongoose´); // ruta 
const router= requise ('./router/index.js')
const url = mongoose {}

User.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    favoritos: {
        type: DataTypes.JSON, 
        allowNull: true,
        defaultValue: []
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: true
});

module.exports = User;
