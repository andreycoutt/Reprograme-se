// Implementar comando de repetição (de 1 até 20)
var par = 0;
var impar = 0;

for (var i = 1; i <= 20; i++) {
  console.log(i * i);
  if (i % 2 == 0) {
     par += i * i
  } else {
     impar += i * i
  }
}

console.log("-----------------------------------")
console.log("A soma dos quadrados pares:", par);
console.log("A soma dos quadrados ímpares:", impar);