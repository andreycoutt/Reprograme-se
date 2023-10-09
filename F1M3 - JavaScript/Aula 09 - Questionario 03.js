const prompt = require("prompt-sync")();
terminou = false;
p = i = 0;
while (!terminou) {
  n = parseInt(prompt("Digite um número, ou zero para terminar: "));
  if (n == 0) {
    terminou = true;
  } else {
    if (n % 2 == 0) {
      p = p + 1;
    } else {
      i = i + 1;
    }
  }
}
console.log("P = ", p);
console.log("I = ", i);