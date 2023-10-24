const prompt = require('prompt-sync')();

alturas = []

// Implementar a entrada de dados
for (var i = 1; i <= 10; i++){
  let altura = parseFloat(prompt("Digite a altura: "));
  alturas.push(altura);
}

// Implementar o processamento de dados
// Fazer for dentro de for
for (var i = 0; i <= 9; i++){
  let cont = 0;
  for (let j = 0; j <=9; j++){
    if(alturas[i] > alturas[j]){
      cont = cont + 1;
    }
  }console.log("Aluno ", i, ": maior que", cont, "aluno(s)");
}
