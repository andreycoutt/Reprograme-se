var express = require("express");
const { kill } = require("process");
var router = express.Router();

// LISTA DE CIDADADES

var cidades = ["mimoos", "cachoeiro", "serra"];

router.get("/clientes", function (req, res) {
  res.send("Lista de todos os clientes");
});

router.get("/", function (req, res) {
  res.render("form");
  
});

router.get("/clientes/:nome/:sobrenome?", function (req, res) {
  res.send(
    "Seja bem vindo <h1>" +
      req.params.nome +
      " " +
      req.params.sobrenome +
      "</h1>",
  );
});

// AULA 03

router.get("/cidades/:id", (req, res) => {
  let id = req.params.id;
  return res.json([cidades[id]]);
});

router.post("/cidades", (req, res) => {
  let nome = req.body.nome;

  // Aula 4

  router.get("/par", function (req, res) {
    let nome = req.query["nome"];
  });
  cidades[cidades.lenght] = nome;
  return res.json([cidades[cidades.lenght - 1]]);
});

router.get("/cidades", (req, res) => {
  res.render("form");
});

// Aula 4
router.get("/par", function (req, res) {
  let nome = req.query["nome"];
  if (nome) {
    res.send("<h1>" + nome + "</h1>");
  } else {
    res.send("não foi localizado nenhum valor");
  }
  res.send("Nome = " + req.query["nome"]);
});

module.exports = router;
