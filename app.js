// Actividad 7
var express = require('express')
global.app = express()
global.datos = [];
var bodyParse = require('body-parser')
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({extended:true}))
const mongoose = require('mongoose')
global.config = require(__dirname + '/config.js').config


app.all('*',function(request,response,next){

        var listablanca  = request.headers.origin; //lista blanca
        response.header('Access-Control-Allow-Origin', listablanca)
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
        response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        response.header("Access-Control-Allow-Credentials", "true");
        next()
     })

//Dar acceso
var cors = require('cors')//recursos compartidos
app.use(cors({origin:function(origin,callback){

        console.log(origin)

        if(!origin) return callback(null,true)

        if(config.listablanca.indexOf(origin) === -1){

            return callback('error cors',false)
        }

        return callback (null,true)}
}))

mongoose.connect('mongodb://127.0.0.1:27017/' + config.db, {useNewUrlParser:true,useUnifiedTopology:true},(error,response)=>{
    if (error){
        console.log(error)
    }
    else {
        console.log('Conectado a la base de datos')
    }
})

require(__dirname + '/routes.js')


app.listen(config.puerto,function(){
    console.log('Servidor conectado por el puerto: ' + config.puerto)
})