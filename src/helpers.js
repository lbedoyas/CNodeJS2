const hbs = require('hbs');

hbs.registerHelper('obtenerPromedio',(nota1,nota2,nota3)=>{
    return (nota1+nota2+nota3)/3;
})



hbs.registerHelper('listar', () => {
    listaEstudiantes = require('./listado.json');
    let texto = "<table>\
                <thead>\
                    <th>Nombre</th> \
                    <th>Matematicas</th> \
                    <th>Ingles</th> \
                    <th>Programacion</th> \
                </thead>\
                <tbody>\
                "
    
    'Lista de estudiantes <br><br>';

    listaEstudiantes.forEach(estudiantes => {
        texto = texto + 
        '<tr>'+ 
        '<td>' +  estudiantes.nombre + '</td>' +
        '<td>' +  estudiantes.matematicas + '</td>' +
        '<td>' +  estudiantes.ingles + '</td>' +
        '<td>' +  estudiantes.programacion + '</td></tr>'
        
    });
    texto = texto + '</tbody></table>';
    return texto;
});