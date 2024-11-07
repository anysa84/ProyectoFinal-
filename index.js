// enrutamiento//


const express = require('express')
const mongoose = require('mongoose')
const router = require('./Rutas/index')
const url = "mongodb+srv://Anahi:GZ3XzN7Lf1ndWX4t@intro.tuyod.mongodb.net/?retryWrites=true&w=majority&appName=intro"
const app = express () 

//otra funcion//
const dotenv = require('dotenv').config ()

console.log (process.env.DATABASE_URL)

//EL ORGANIZADOR DE LA DATA
app.use(express.json())


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

//EL ORGANIZADOR DE LAS RUTAS
app.use('/', router)

const connectToMongo = async ()=>{
  try{
   await mongoose.connect(url)
   //FUNCION PARA LEVANTAR NUESTRO SERVIDOR
    app.listen(3000, () => {
      console.log("Servidor escuchando en puerto 3000 y DB conectada");
    });
    }catch(error){
    //SI FALLA CAE ACA
    console.log(error)
  }  
}

connectToMongo()