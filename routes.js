var usuarioscontroller = require(__dirname + '/controladores/usuarioscontroller.js').usuarios

//create
app.post("/usuarios/guardar",function(request,response){
    usuarioscontroller.guardar(request, response)
})   
//listar
app.post("/usuarios/listar", function(request,response){
    usuarioscontroller.listar (request,response)
})
// //listar por Id
// app.post("/usuarios/listarId", function(request,response){
//     usuarioscontroller.listarId (request,response)
// })

//Modificar

app.post("/usuarios/modificar",function(request,response){
    usuarioscontroller.modificar (request,response)
})
//Eliminar
app.post("/usuarios/eliminar",function(request,response){
   usuarioscontroller.eliminar (request, response)
})