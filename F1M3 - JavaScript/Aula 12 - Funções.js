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