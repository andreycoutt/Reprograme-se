const prompt = require('prompt-sync')();

num = parseInt(prompt("Digite um número: "));

if(num > 0){
    console.log("O numero: ", num, "é positivo.")
}else if(num < 0){
    console.log("O número: ", num, "é negativo.")
}else{
    console.log("O número: ", num, "é zero.")
}