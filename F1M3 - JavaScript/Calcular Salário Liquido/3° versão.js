// Elabora um algoritmo para calcular o salário líquido de uma pessoa
// Solicite ao usuário que digite seu nome e o valor de seu salário bruto
// O imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:
// * salário bruto de 0,00 até 1.903,98 = 5%
// * salário bruto de 1.903,99 até 2.826,66 = 7,5
// * salário bruto a partir de 2.826,66 = 15%
// Ao final, mostre na tela o valor do salário líquido


const prompt = require('prompt-sync')();
nome = prompt("Digite seu nome: ");
salario_bruto = parseFloat(prompt("Digite seu salário: "));

if(salario_bruto > 0 && salario_bruto < 1903.98){
    var imposto_renda = salario_bruto * 5/100; // ou 0.05
} else if(salario_bruto > 1903.98 && salario_bruto < 2826.66){
    var imposto_renda = salario_bruto * 7.5/100; // ou 0.075
}else{
    var imposto_renda = salario_bruto * 15/100; // ou 0.15
}

var salario_liquido = salario_bruto - imposto_renda;

console.log("______________________\n")
console.log("Nome:", nome)
console.log("Salário Bruto:", salario_bruto);
console.log("Imposto de Renda:", imposto_renda);
console.log("______________________")
console.log("\nSalário Liquido:", salario_liquido);
console.log("______________________")