const express = require('express');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
  res.json('Bem vindo ao  servidor web utilizano o express!');
})

app.listen(porta, () => {
  console.log('Servidor rodando na porta 443');
});