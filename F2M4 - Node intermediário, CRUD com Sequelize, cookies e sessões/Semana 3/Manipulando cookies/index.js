const express = require("express");
const app = express();

var cookie = require("cookie-parser");
app.use(cookie());

let usuario = {
  nome: "carla",
  idade: "18",
};

let usuario2 = {
  nome: "Ana",
  idade: "22",  
};

app.get("/adicionarUsuario", (req, res) => {
  res.cookie("usuarioDados", usuario2, {expire: 400000 + Date.now()});
  res.send("Dados adicionados com sucesso");
});

app.get("/usuarios", (req, res) => {
  res.send(req.cookies);
});

app.get("/", (req, res) => {
  res.send("Seja bem Vindo ao teste de cookies.");
});


app.get("/logout", (req, res)=>{
  res.clearCookie("usuarioDados2");
  res.send("Usuário desconectado com sucesso!");
});

app.listen(3000);
