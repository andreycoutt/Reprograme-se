
var x = 10;
var y = 20;

function troca() {
  var aux = x;
  x = y;
  y = aux;
}

troca();
console.log("x =", x, "e y =", y);