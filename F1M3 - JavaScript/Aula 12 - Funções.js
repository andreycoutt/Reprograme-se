const { Z_RLE } = require("zlib");

function mostrar_mensagem(){
  console.log("Mensagem dentro da funçao");
}

function calcular_produto(x, y, z){
  console.log("Produto:", x*y*z);
}

function calcular_quociente(a, b){
  return a / b;
}

mostrar_mensagem();
calcular_produto(4, 7.5, 2.3);
q = calcular_quociente(11, 5);
console.log(q);

function calcular_area(x, y, z = 1){
  area = x * y * z;
  return area;
}

raio = 2;
comprimento = 6;
largura = 9;

area_circulo = calcular_area(raio, raio, 3.14);
console.log("Circulo", "\nRaio:", raio, "\nÁrea:", area_circulo);

area_retangulo = calcular_area(comprimento, largura);
console.log("Retângulo", "\nComprimento:", comprimento, "\nLargura:", largura, "\nÁrea:", area_retangulo);