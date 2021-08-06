const express = require('express');
const router = express.Router();
const {countryall, countryDetail , countryAllName} = require('../functions/queries.js')


/**
 * 316 / 5000
Resultados de traducción
findByPk. El método findByPk obtiene solo una entrada de la tabla, utilizando la clave principal proporcionada. 
proyecto const = aguardar proyecto. findByPk (123); if (proyecto === nulo) {consola}.
encuentra todos. Busca todas las instancias que coinciden con los criterios de búsqueda. 
Si no se proporciona ningún criterio, devuelve todas las instancias de la tabla. 
 */


router.get('/', async (req,res,next) => {
    try {
        const { name } = req.query
        // res.send('Soy la ruta get de countries')
        if (name) {
            const forName = await countryAllName(name)
            // le pregunto si tiene length forName si tiene devuelve el pais si no el mensaje
            res.status(200).send(forName.length ? forName : [{msj: 'No se encontro el nombre del pais'}]);
        } else {
            const all = await countryall()
            res.status(200).send(all);
        }
    } catch (error) {
        next(error)
    }
})

router.get('/:idPais', async (req, res, next) => {
    try {
        var { idPais } = req.params
        var countieDetail = await countryDetail(idPais)
        res.status(200).send(countieDetail)
    } catch (error) {
        next(error)
    }
})


module.exports = router;