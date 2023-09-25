// Elabora um Algoritimo para calcular o salário liquido de uma pessoa.
// O salário bruto dessa pessoa é de R$ 7.500,00.
// O imposto de renda a ser descontado é equivalente a 10% do salário bruto.
// Ao final, mostre na tela o valor do salário líquido

var salario_bruto = 7500;
var imposto_renda = salario_bruto * 10/100; // ou 0.10
var salario_liquido = salario_bruto - imposto_renda;

console.log("______________________\n")
console.log("Salário Bruto:", salario_bruto);
console.log("Imposto de Renda:", imposto_renda);
console.log("______________________")
console.log("\nSalário Liquido:", salario_liquido);
console.log("______________________")
