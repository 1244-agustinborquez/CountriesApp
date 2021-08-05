const { DataTypes } = require('sequelize');

module.exports  = sequelize => {
    sequelize.define('actividad', {
        nombre: {
            type: DataTypes.STRING
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