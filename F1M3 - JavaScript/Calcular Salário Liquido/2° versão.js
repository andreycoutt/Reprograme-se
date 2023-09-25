// Elabora um Algoritimo para calcular o salário liquido de uma pessoa.
// Solicite ao Usuário que digite seu nome e o valor de seu salário bruto
// O imposto de renda a ser descontado é equivalente a 10% do salário bruto.
// Ao final, mostre na tela o valor do salário líquido

const prompt = require('prompt-sync')();
nome = prompt("Digite seu nome: ");
salario_bruto = parseFloat(prompt("Digite seu salário: "));
var imposto_renda = salario_bruto * 10/100; // ou 0.10
var salario_liquido = salario_bruto - imposto_renda;

console.log("______________________\n")
console.log("Nome:", nome)
console.log("Salário Bruto:", salario_bruto);
console.log("Imposto de Renda:", imposto_renda);
console.log("______________________")
console.log("\nSalário Liquido:", salario_liquido);
console.log("______________________")
