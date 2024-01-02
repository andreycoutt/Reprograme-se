try{

    var resultado =  dividir(10, 0);
  
    console.log(resultado);
    
  }catch(erro){
    console.log('A operação não pode ser realizada. ' + erro.message);
  }
  
  function dividir(a, b){
    if(b == 0){
      throw new Error("Divisão por zero é matematicamente invalida");
    }
  
    return a / b;
  }