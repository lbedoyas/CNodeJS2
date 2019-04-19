var express = require('express');
var app = express();
const path = require('path');
const hbs = require('hbs');

const directorioPublico = path.join(__dirname,'../public' );
//Registramos la carpeta con los partials
const directorioPartials = path.join(__dirname,'../partials');
app.use(express.static(directorioPublico));
//Se ejecutar el llamado indicando que aca estan los partials
hbs.registerPartials(directorioPartials);
 

console.log(__dirname)

//Se traer los argumentos del hbs
app.set('view engine', 'hbs');


app.get('/',(err,res)=>{
    res.render('index',{
        estudiante: 'Luis'
    })
});

app.get('/calculos',(req,res)=>{
    res.render('calculos',{
        estudiante: 'Iris'
    })
});

 
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
})