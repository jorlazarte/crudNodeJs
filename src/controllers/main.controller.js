//agregamos el módulo path
const path = require('path');

//generamos una constante con una función flecha
const index = (req, res) => {
	//res.send('hola que tal? cómo estás?');
	//console.log(__dirname);
	//res.sendFile(path.resolve(__dirname, '../../private/index.html')); //resolve toma la carpeta actual y se mueve dentro del mismo

	res.render('index');
};

//exportamos para poder levantar en main.router.js
module.exports = {
	index //en realidad sería index: index pero como los dos nombres son lo mismo puedo poner solo index
};