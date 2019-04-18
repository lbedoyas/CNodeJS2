var express = require('express');
var app = express();
const path = require('path');

const directorioPublico = path.join(__dirname,'../public' );
app.use(express.static(directorioPublico));
 

console.log(__dirname)


app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000,()=>{
    console.log("Escuchando el puerto 3000");
})