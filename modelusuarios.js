
var ModelUsuarios = {}

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var usuariosSchema = new Schema ({
    nombre:String,
    apellido:String,
    edad:Number,
    cedula:String
})

const MyModel= mongoose.model('usuarios', usuariosSchema)

ModelUsuarios.guardar = function(post,callback){

    const instancia = new MyModel
    instancia.nombre = post.nombre,
    instancia.apellido = post.apellido,
    instancia.edad = post.edad,
    instancia.cedula = post.cedula,

    instancia.save((error,UserCreate) => {
        if(error){
            console.log(error)
            return callback({estate:false,mensaje:error})
        }
        else{
            return callback({state:true,mensaje:UserCreate})
        }
    })

    // datos.push({
    //     cedula      :post.cedula,
    //     nombre      :post.nombre,
    //     apellido    :post.apellido,
    //     direccion   :post.direccion,
    //     edad        :post.edad,
    //     estado_c    :post.estado_c
    // })

    // return callback({state:true,mensaje:"Registro exitoso"})
}

ModelUsuarios.listar = function(post, callback){
    MyModel.find({},{_id:1,nombre:1,apellido:1,edad:1,cedula:1},(error,documentos) => {
        if(error) {
            return callback({state:false,mensaje:error})
        }
        else{
            return callback({state:true,mensaje:'Lista usuarios',data:documentos})
        }
    })

}

ModelUsuarios.listarId = function(post,callback){
    MyModel.findById(post.id,{},(error,documentos) => {
        if(error) {
            return callback({state:false,mensaje:error})
        }
        else{
            return callback({state:true,mensaje:'Lista usuarios',data:documentos})
        }
    })

}

ModelUsuarios.modificar = function(post,callback){

    MyModel.find({cedula:post.cedula},{},(error,documentos) =>{

        if(error){
            return callback({state:false,mensaje:error})
        }
        else{
            if(documentos.length > 0) {
            MyModel.findByIdAndUpdate(documentos[0]._id,{
            nombre:post.nombre,
            apellido:post.apellido,
            edad:post.edad,
            cedula:post.cedula},
            (error,RegistroMod) => {
                if(error){
                    console.log(error)
                    return callback({state:false,mensaje:error})
                }
                else {
                    return callback({state:true,mensaje:'Registro actualizado',data:RegistroMod})
                }
            })
        }
            else{
                return callback({state:false,mensaje:'Cédula no existe'})
            }
            // datos[post.posicion].edad = post.edad 
            // return callback ({state:true,mensaje:"Actualización exitosa"})
            // return callback({cantidad:documentos.length})//contar cuantos registros hay
        }
    })

}

ModelUsuarios.eliminar = function(post,callback){

    MyModel.findByIdAndDelete(post.Id,(error,RegistroElim) => {
        if(error){
            return callback({state:false,mensaje:error})
        }
        else {
            return callback({state:true,mensaje:'Registro eliminado'})
        }
    })

    // datos.splice(posicion,1)   
    // return callback({state:true,mensaje:"Registro eliminado"}) 
}
module.exports.usuarios = ModelUsuarios