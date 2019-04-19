var express = require('express');
var app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./helpers');

const directorioPublico = path.join(__dirname,'../public' );
//Registramos la carpeta con los partials
const directorioPartials = path.join(__dirname,'../partials');
app.use(express.static(directorioPublico));
//Se ejecutar el llamado indicando que aca estan los partials
hbs.registerPartials(directorioPartials);
//Traer argumentos de body-parser para usar
app.use(bodyParser.urlencoded({extended: false}))
 

console.log(__dirname)

//Se traer los argumentos del hbs
app.set('view engine', 'hbs');



app.get('/',(err,res)=>{
    res.render('index',{
        estudiante: 'Luis'
    })
});

app.post('/calculos',(req,res)=>{

    console.log(req.query);
    res.render('calculos',{
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    });
});

 
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
})