var express = require('express');
var app = express();
const path = require('path');
const hbs = require('hbs');

const directorioPublico = path.join(__dirname,'../public' );
app.use(express.static(directorioPublico));
 

console.log(__dirname)

//Se traer los argumentos del hbs
app.set('view engine', 'hbs');


app.get('/',(err,res)=>{
    res.render('index',{
        estudiante: 'Luis'
    })
});


 
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
})