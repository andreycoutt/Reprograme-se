// Elabora um algoritmo para calcular o salário líquido de 5 pessoas
// Solicite ao usuário que digite seu nome e o valor de seu salário bruto
// Peça também, para o usuário digitar a quantidade de dependentes
// Para cada um dos dependentes deve ser solicitado o ganho mensal. Este valor deverá ser adicionado ao salário bruto.
// Calcule a renda familiar per capta
// Caso a renda para cada membro da familia seja menor que R$ 500,00 a pessoa ficará isenta de imposto de renda, ou seja, não será calculado dentre as faixas salariasi e seu valor será zero
// Caso a renda para cada membro da familia seja maior ou igual a R$ 500,00 o imposto de renda a ser descontado do salário bruto deve considerar as seguintes regras:
// * salário bruto de 0,00 até 1.903,98 = 5%
// * salário bruto de 1.903,99 até 2.826,66 = 7,5
// * salário bruto a partir de 2.826,66 = 15%
// Ao final, mostre na tela o valor do salário líquido


const prompt = require('prompt-sync')();

for(var i = 1; i <= 5; i++){

  console.log(i, "° Pessoa");
  nome = prompt("Digite seu nome: ");
  salario_bruto = parseFloat(prompt("Digite seu salário: "));
  dependentes = parseInt(prompt("Digite a quantidade de dependentes: "));

  for (var j = i; j <= dependentes; j++){
    ganho = parseFloat(prompt("Digite seu ganho mensal: "));
    salario_bruto = salario_bruto + ganho;
  }

  renda_per_capita = salario_bruto / (dependentes + 1);
  
  if(renda_per_capita >= 500){
  
      if(salario_bruto > 0 && salario_bruto < 1903.98){
          var imposto_renda = salario_bruto * 5/100; // ou 0.05
      } else if(salario_bruto > 1903.98 && salario_bruto < 2826.66){
          var imposto_renda = salario_bruto * 7.5/100; // ou 0.075
      }else{
          var imposto_renda = salario_bruto * 15/100; // ou 0.15
      }
  }else{
      imposto_renda = 0;
      console.log("Olá ", nome, "você esta isento(a) de pagar imposto de renda");
  }
  
  var salario_liquido = salario_bruto - imposto_renda;
  
  console.log("______________________\n");
  console.log("Nome:", nome);
  console.log("Salário Bruto:", salario_bruto);
  console.log("Imposto de Renda:", imposto_renda);
  console.log("______________________");
  console.log("\nSalário Liquido:", salario_liquido);
  console.log("______________________");

}