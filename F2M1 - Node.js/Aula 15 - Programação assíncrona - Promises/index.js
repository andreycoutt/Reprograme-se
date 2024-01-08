function cadastrarUsuario(){
    return new Promise((resolve, reject) => {
  
      setTimeout(() => {
          // logica para cadastrar o usuario...
  
        var erro = false;
  
        if(!erro){
          resolve('Sucesso!');
        }else{
          reject('Ocorreu um erro!');
        }
      }, 2000);
    });
  }
  
  
  cadastrarUsuario()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((mensagem) => {
    console.log(mensagem);
  });