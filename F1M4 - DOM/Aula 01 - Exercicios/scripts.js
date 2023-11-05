var numero = document.getElementsByTagName('*');
document.write("Quantidade de elementos: ", + numero.length);

var todosElementos = "";

for(let e of numero){
    todosElementos = todosElementos + "<br>" + e.tagName;
}

document.write(todosElementos);