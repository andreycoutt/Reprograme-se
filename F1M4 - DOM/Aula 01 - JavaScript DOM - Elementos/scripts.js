document.write("Ola mundo");
document.write(Date());
document.write(document.title);
document.write(document.characterSet);

var corpo = document.body;
corpo.style.background = "Gray";


// getElementById
var h1_Brasil = document.getElementById("pais_brasil");
h1_Brasil.style.background = "Yellow";
document.write("<p> innerText: " + h1_Brasil.innerText);
document.write("<p> innerHTML: " + h1_Brasil.innerHTML);


//getElementByTagName
var array_h2 = document.getElementsByTagName("h2");
var h2_es = array_h2[0];
var h2_mg =  array_h2[1];
h2_es.style.color = "Pink";
h2_mg.style.color = "DarkRed";


//getElementByName
var array_cidade = document.getElementsByName("cidade");
var cidade_0 =  array_cidade[0];
cidade_0.style.borderLeftColor = "Yellow";