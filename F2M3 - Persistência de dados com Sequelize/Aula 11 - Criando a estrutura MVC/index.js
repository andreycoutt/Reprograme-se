// Importando bibliotecas e arquivos
const database = require("./db/db");
const express = require("express");
const app = express();
const Video = require("./models/Video");

try{
  database.sync().then(()=>{
    app.listen(9443,()=>{
      console.log("servidor rodando");
    })
  })
}

catch(erro){
  console.log("houve uma falha ao sincronizar com o banco de dados", erro);
}  