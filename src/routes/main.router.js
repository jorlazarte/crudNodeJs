const express = require('express');
const router = express.Router();

//requiero el controlador para poder utilizar la función flecha index
const controller = require('../controllers/main.controller.js');

/* ANTES ESTABA DE ESTA MANERA
router.get( '/', (req, res) => {
	res.send('hola que tal? cómo estás?');
});
AHORA SACO LA FUNCIÓN Y GENERO UN CONTROLADOR main.controller.js*/
router.get( '/', controller.index);

module.exports = router;