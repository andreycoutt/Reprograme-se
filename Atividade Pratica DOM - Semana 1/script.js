// Selecionar todos elementos da classe 'produto_preco'
const produto_preco = document.getElementsByClassName('produto_preco');

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)

var somatorio = 0;
for(var i = 0; i < produto_preco.length; i++){
  somatorio += parseFloat(produto_preco[i].innerText)
}

// Escrever no conteúdo da página o valor da soma 
document.write("Total: R$ " + somatorio);
