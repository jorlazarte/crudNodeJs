const querystring = require('querystring'); //módulo de NodeJs para obtener los parámetros que están en la url

const index = (req, res) => {
	const query = querystring.stringify(req.query);
	
	fetch('https://fakestoreapi.com/products?' + query) //en vez de sacar cada parámetro envío todos juntos
			//va a tardar un tiempo y responde con un response (res) que se transforma en un json
            .then(res=>res.json())
            //.then(json=>console.log(json))
            
            //ANTES SIMPLEMENTE LISTABA
            //.then( (products) => res.send(products) ) //entonces ese json de productos lo envío mediante un send a pantalla

            //AHORA CAMBIO PARA MOSTRAR UNA VISTA
            .then( (products) => res.render('products', {products}) );
}

const show = (req, res) => {
	fetch('https://fakestoreapi.com/products/' + req.params.id) //cuando hago esto genero una promesa que llama a ese servicio
			
			//va a tardar un tiempo y responde con un response (res) que se transforma en un json
            .then(res=>res.json())
            //.then(json=>console.log(json))
            .then( (products) => res.json(products) ) //entonces ese json de productos lo envío mediante un send a pantalla
};

module.exports = {
	index,
	show
}