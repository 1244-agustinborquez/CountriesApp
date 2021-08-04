const express = require('express');
const router = express.Router();
const axios = require('axios');
const { Country, Actividad } = require('../db');

/**
 * 316 / 5000
Resultados de traducción
findByPk. El método findByPk obtiene solo una entrada de la tabla, utilizando la clave principal proporcionada. 
proyecto const = aguardar proyecto. findByPk (123); if (proyecto === nulo) {consola}.
encuentra todos. Busca todas las instancias que coinciden con los criterios de búsqueda. 
Si no se proporciona ningún criterio, devuelve todas las instancias de la tabla. 
 */


router.get('/', (req,res) => {

})