// bebidas
const prompt = require('prompt-sync')();
var array_bebidas = [];

do {
  console.log("Sistema de Cadastro de Bebidas");
  console.log("1 - Inserir Bebida");
  console.log("2 - Excluir Bebida");
  console.log("3 - Listar Bebidas");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Cliente...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let nome = prompt("Digite o nome: ");
    let tipo = prompt("Digite o tipo de bebida: ");
    let marca = prompt("Digite a marca: ");
    let quantidade = prompt("Digite a quantidade: ");
    let preco = prompt("Digite o preço: ");

    // Neste trecho estamos declarando um objeto

    const bebida = {
      codigo: codigo,
      nome: nome,
      tipo: tipo,
      marca: marca,
      quantidade: quantidade,
      preco: preco,
    }

    inserir_bebida(bebida)



    // Chamar a função inserir
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Bebidas...\n");
    let codigo = prompt("Digite o código do cliente: ");
    // Chamar a função excluir
    excluir_bebida(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Bebidas...\n");
    // Chamar a função listar
    listar_bebida();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_bebida(bebida) {
  // Implementar corpo da função
  array_bebidas.push(bebida);
}

function excluir_bebida(codigo) {
  // Implementar corpo da função
  for (i = 0; i < array_bebidas.length; i++) {
    let bebida = array_bebidas[i];
    if(bebida.codigo == codigo){
      array_bebidas.splice(i, 1);
    } 
  }
}

function listar_bebida(bebida) {
  // Implementar corpo da função
  for (i = 0; i < array_bebidas.length; i++) {
    let bebida = array_bebidas[i];
    console.log(bebida.codigo, " - ", bebida.nome, " - ", bebida.tipo, " - ", bebida.marca, " - ", bebida.quantidade, " - ", bebida.preco);
  }
}

