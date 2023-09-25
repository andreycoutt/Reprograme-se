const prompt = require('prompt-sync')();

nome = prompt("Digite seu nome: ");
idade = prompt("Digite sua idade: ");
endereco = prompt("Digite seu endereço: ");

console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Endereço: ", endereco);

console.log("\nConvertendo os tipos de dados");
x = parseInt(prompt("Digite o número 1: "));
y = parseInt(prompt("Digite o número 2: "));

soma = x + y;

console.log("\nx =", x, "\ny =", y);
console.log("\nSoma =", soma);

