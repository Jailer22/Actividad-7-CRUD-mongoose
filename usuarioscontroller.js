var ModelUsuarios = require(__dirname + '/../modelos/modelusuarios.js').usuarios

var usuarioscontroller = {
}

usuarioscontroller.guardar = function(request,response){

        var post = {
        cedula:request.body.cedula,
        nombre:request.body.nombre,
        apellido:request.body.apellido,
        direccion:request.body.direccion,
        edad:request.body.edad,
        estado_c:request.body.estado_c}

    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state:false,mensaje:"ingrese numero de cédula"})
        return false
    }

    if(post.nombre == "" || post.nombre == null || post.nombre == undefined){
        response.json({state:false,mensaje:"Ingrese nombre"})
        return false
    }

        ModelUsuarios.guardar (post,function(respuesta){
        response.json(respuesta)
        //console.log(datos)//
    })     
}

usuarioscontroller.listar = function (request,response){
    ModelUsuarios.listar(null,function(respuesta){
        response.json(respuesta)
    })  
}

// usuarioscontroller.listarId = function (request,response){
    
//     var post = {id:request.body.id}
    
//     if(post.id == undefined ||post.id == null || post.id == "" ){
//         response.json({state:false,mensaje:'El Id es obligatorio'})
//         return false
//         }
        
//         ModelUsuarios.listarId(post,function(respuesta){
//         response.json(respuesta)
//     })  
// }

usuarioscontroller.modificar = function(request,response){
    var post = {
        Id      :request.body.Id, 
        cedula  :request.body.cedula,
        edad    :request.body.edad,
        nombre  :request.body.nombre,

       }

    if(post.Id == "" || post.Id == undefined || post.Id == null){
    response.json({state:false,mensaje:"el Id es obligatorio"}) 
    return false
    }

    if(post.nombre == "" || post.nombre == undefined || post.nombre == null){
    response.json({state:false,mensaje:"Ingrese nombre"}) 
    return false
    }
     
    // if(post.apellido == "" || post.apellido == undefined || post.apellido == null){
    // response.json({state:false,mensaje:"Apellido es obligatorio"}) 
    // return false
    // }

    if(post.cedula == "" || post.cedula == undefined || post.cedula == null){
    response.json({state:false,mensaje:"Ingrese numero de cédula"}) 
    return false
    }

    if (post.edad == "" || post.edad == undefined || post.edad == null){
    response.json({state:false,mensaje:"Ingrese la edad a actualizar"}) 
    return false
    }

    // //var posicion = datos.findIndex((item)=> item.cedula == post.cedula)

    // //if(posicion == -1 ){
    //     response.json({state:false,mensaje:"Esta cedula no existe"})
    //     return false
    // }

        // post.posicion = posicion
        ModelUsuarios.modificar(post,function(respuesta){
        response.json (respuesta)
    }) 
}

usuarioscontroller.eliminar = function(request,response){

    var post = { 
        id:request.body.id}

    if(post.id == "" || post.id == undefined || post.id == null){
        response.json({state:false,mensaje:"Ingrese Id para eliminar"}) 
        return false
    }

    // var posicion = datos.findIndex((item)=> item.cedula == post.cedula)
    // if (posicion == -1){
    //     response.json({state:false,mensaje:"Usurio no encontrado"})
    //     return false
    // }

     ModelUsuarios.eliminar(post,function(respuesta){
        response.json(respuesta)
     })
   
}

module.exports.usuarios = usuarioscontroller