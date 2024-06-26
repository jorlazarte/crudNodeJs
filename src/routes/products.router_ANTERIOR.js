const express = require('express');

const router = express.Router();

const querystring = require('querystring'); //módulo de NodeJs para obtener los parámetros que están en la url

//vamos a traer todos los productos llamando a una api en https://fakestoreapi.com/docs
router.get('/', (req, res) => {

	const query = querystring.stringify(req.query);

	/*suponiendo que corremos este http://localhost:3000/products?limit=3&sort=desc
	con esa url, en esta línea sería: limit=3&sort=desc
	entonces se lo envío a la url directamente*/
	//console.log(query);

	//const limit = req.query.limit;

	//fetch('https://fakestoreapi.com/products?limit=' + limit) //antes cuando hago esto genero una promesa que llama a ese servicio
	fetch('https://fakestoreapi.com/products?' + query) //en vez de sacar cada parámetro envío todos juntos
			//va a tardar un tiempo y responde con un response (res) que se transforma en un json
            .then(res=>res.json())
            //.then(json=>console.log(json))
            .then( (products) => res.send(products) ) //entonces ese json de productos lo envío mediante un send a pantalla
})


router.get('/:id', (req, res) => {
	fetch('https://fakestoreapi.com/products/' + req.params.id) //cuando hago esto genero una promesa que llama a ese servicio
			
			//va a tardar un tiempo y responde con un response (res) que se transforma en un json
            .then(res=>res.json())
            //.then(json=>console.log(json))
            .then( (products) => res.json(products) ) //entonces ese json de productos lo envío mediante un send a pantalla
})

/*en la línea 23 el res.send lo cambiamos por res.json confirmando que lo que envío es un json*/

module.exports = router;