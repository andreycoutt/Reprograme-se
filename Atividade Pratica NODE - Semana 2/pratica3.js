const prompt = require('prompt-sync')();

try{

  var num1 = Number(prompt('Entre com o primeiro número: '));
  var num2 = Number(prompt('Entre com o segundo número: '));

  if(num2 === 0){
    //LANCE UM NOVO ERRO COM O OPERADOR THROWz
    throw new Error('Divisão por zero é matematicamente invalida');  
  }

  console.log('O resultado da divisão é : ', num1/num2);
}catch (e){
  console.log('Houve um erro na operação: ', e.message);
}