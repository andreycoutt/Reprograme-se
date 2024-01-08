const prompt = require('prompt-sync')();

setTimeout(() => {
  console.log("testando");
}, 5000);

console.log("oi");


function obterNome(callback){
  var nome = prompt("Entre com o seu nome: ");
  callback(nome);
}

obterNome((nome) => {
  console.log(nome);
});


function cadastrarUsuario(callback1){
  setTimeout(() =>{
    // logica de cadastro
    // deu erro
    callback1(new Error('Erro no registo do usuario'));
  }, 2000);
}


cadastrarUsuario((erro) => {
  if(erro){
    return console.log('ocorreu um erro: ' + erro.message);
  }
  console.log('Usuario registrado com sucesso.');
});
