// tiene la configuracion de express
'use strict' // convencio de EMC6

var express = require('express');
var bodyParser = require('body-parser');
var app = express();// ejecute la libreria express
const api=require('./routes/routes');

// Importamos el facilitador de peticiones 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api',api);// para que todas las rutas usen el prefijo api/

module.exports=app; 

