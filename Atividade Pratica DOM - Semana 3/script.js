(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_aeronaves')) ?? [];
}

function setLocalStorage(bd_aeronaves) {
  localStorage.setItem('bd_aeronaves', JSON.stringify(bd_aeronaves));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_aeronaves = getLocalStorage();
  let index = 0;
  for (aeronave of bd_aeronaves) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${aeronave.nome}</td>
        <td>${aeronave.fabricante}</td>
        <td>${aeronave.codigo}</td>
        <td>${aeronave.classificacao}</td>
        <td>${aeronave.peso}</td>
        <td>${aeronave.numero}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const aeronave = {
    nome: document.getElementById('nome').value,
    fabricante: document.getElementById('fabricante').value,
    codigo: document.getElementById('codigo').value,
    classificacao: document.getElementById('classificacao').value,
    peso: document.getElementById('peso').value,
    numero: document.getElementById('numero').value
  }
  const bd_aeronaves = getLocalStorage();
  bd_aeronaves.push(aeronave);
  setLocalStorage(bd_aeronaves);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_aeronaves = getLocalStorage();
  bd_aeronaves.splice(index, 1);
  setLocalStorage(bd_aeronaves);
  atualizarTabela();
}

function validarCodigo() { // Adaptação da função validar (10 pontos)
  const bd_aeronaves = getLocalStorage();
  for (aeronave of bd_aeronaves) {
    if (codigo.value == aeronave.codigo) {
      codigo.setCustomValidity("Este código já existe, coloque outro por favor!");
      feedbackCodigo.innerText = "Este código já existe, coloque outro por favor!";
      return false;
    } else {
      codigo.setCustomValidity("");
      feedbackCodigo.innerText = "Informe o código da aeronave";
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const codigo = document.getElementById("codigo");
const feedbackCodigo = document.getElementById("feedbackCodigo");
codigo.addEventListener('input', validarCodigo);