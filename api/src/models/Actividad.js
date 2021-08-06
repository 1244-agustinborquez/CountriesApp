const { DataTypes } = require('sequelize');

module.exports  = sequelize => {
    sequelize.define('actividad', {
        name: {
            type: DataTypes.STRING,
            unique: true
        },
        dificultad: {
            type: DataTypes.INTEGER
        },
        duracion: {
            type: DataTypes.INTEGER
        },
        temporada: {
            type: DataTypes.ENUM,
            values: ['Verano', 'Otoño', 'Invierno', 'Primavera']
        }
    })
}