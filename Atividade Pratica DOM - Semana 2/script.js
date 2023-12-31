var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var select_animais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
var container = document.getElementById('container');
// Selecionar elemento 'nome' ( 1 ponto)
var nome = document.getElementById('nome');
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto
select_animais.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);
function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();
  // Implementar...
  if (select_animais.value == "dog") {
    mostrarAnimais(cachorros);
  } else {
    mostrarAnimais(gatos);
  }
}

function mostrarAnimais(animais) {
  for (animal of animais) {
    var novoAnimal = document.createElement('div');
    novoAnimal.innerHTML = `<img src=./img/${animal.imagem}.jpg id=${animal.nome}>`
    container.appendChild(novoAnimal);
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = e.target.id;
  console.log(e.target.src)
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}