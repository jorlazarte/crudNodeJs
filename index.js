
//agregamos el módulo path
const path = require('path');

require('dotenv').config();

const express = require('express');
const app = express();

//npm i express-ejs-layouts
const layouts = require('express-ejs-layouts'); //para hacer un layouts de todo lo que se repite

//genero un middleware configurando una ruta estática, así puedo leer archivos como el css y otros que quiero ver desde el index
app.use(express.static( path.join(__dirname, 'public') ));

app.set('view engine', 'ejs'); //configuramos el motor de vistas ejs
app.set('views', path.join(__dirname, 'src/views') ); //ruta absoluta donde van a estar las vistas


app.use(layouts); //uso el layout declarado en la línea 11
app.set('layout', 'layouts/layout'); //seteo donde va a estar el layout

const mainRouter = require('./src/routes/main.router')
app.use(mainRouter);

/*antes estaba de la siguiente manera: app.use(require('./src/routes/products.router.js') );
entonces puedo mejorar el código agregando que todo lo que entre en /products utilice el router de productos 
como figura en la línea 12*/
app.use('/products', require('./src/routes/products.router.js') ); //ESTA LÍNEA ES LO MISMO QUE LAS LÍNEAS 6 Y 7 SE HACE EN UNA LÍNEA
/*entonces dentro de products.router.js
lo que antes era router.get('/products', (req, res) => {
ahora sería router.get('/', (req, res) => {
porque ya se lo indiqué en el index*/


const PORT = process.env.PORT || 3001;



app.listen( PORT, () => console.log(`http://localhost:${PORT}`) );