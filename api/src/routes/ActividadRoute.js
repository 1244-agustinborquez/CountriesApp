const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Soy la ruta get de actividades')
});

module.exports = router;