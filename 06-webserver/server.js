
//un middleware es una instruccion o callback que se va a ejecutar simempre, no importa que url la persona pida

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers')

//comando para decirle a heroku donde conectarse
const port = process.env.PORT || 3000;


app.use( express.static(  __dirname + '/public'));

//Express HBS engine
//__dirname es para decir que tome todo el path y concatenale la siguiente carpeta

hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home',{
        nombre:'boris',
    });

});

app.get('/about', (req, res) => {

    res.render('about');

})

// app.get('/data', (req, res) => {
//     res.send('Hola data')

//   })

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
})