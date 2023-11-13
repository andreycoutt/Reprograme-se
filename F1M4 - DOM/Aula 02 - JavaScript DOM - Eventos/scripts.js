var b2 = document.getElementById("btn-2");
b2.onclick = function(){ alert('Propriedades de manipulador de eventos');};
var b3 = document.getElementById("btn-3");
b3.addEventListener("click", function() {alert("addEventListener");}, false);