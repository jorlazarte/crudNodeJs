const express = require('express');

const router = express.Router();

//levanto el controlador de productos para poder llamar los métodos
const productController = require('../controllers/product.controller');

//utilizo el controlador y llamo al método index
router.get('/', productController.index);

//utilizo el controlador y llamo al método show
router.get('/:id', productController.show);

/*en la línea 23 el res.send lo cambiamos por res.json confirmando que lo que envío es un json*/

module.exports = router;