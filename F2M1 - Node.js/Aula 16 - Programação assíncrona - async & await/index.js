const { register } = require("module");

function cadastrarUsuario(){
  return new Promise((resolve, reject) => {

    setTimeout(() => {
        // logica para cadastrar o usuario...

      var erro = true;

      if(!erro){
        resolve('Sucesso!');
      }else{
        reject('Ocorreu um erro!');
      }
    }, 2000);
  });
}

/*
cadastrarUsuario()
.then((mensagem) => {
  console.log(mensagem);
})
.catch((mensagem) => {
  console.log(mensagem);
});
*/

async function main(){

  try{
    var dados = await cadastrarUsuario();
  
    console.log(dados);
  }catch(erro){
    console.log("Ocorreu um erro!");
  }
}

main();