const fs = require("fs");

const rawData = fs.readFileSync("dados_pessoas.json");
// const data = //USE O MÉTODO JSON.PARSE PARA CONVERTER OS DADOS DO ARQUIVO JSON

var data = JSON.parse(rawData);

console.log(data);
