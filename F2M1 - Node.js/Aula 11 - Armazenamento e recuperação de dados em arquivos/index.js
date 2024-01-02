const fs = require('fs');


fs.writeFile('./arquivotTexto', 'Este arquivo é um arquivo criado programaticamente no Node.Js', (erro) => {

  if(erro){
    console.log(erro.message);
    return;
  }

  console.log('arquivo escrito com sucesso');
  
});

fs.readFile('./arquivotTexto', 'utf-8', (erro, data) => { 
  if(erro){
    console.log(erro.message);
    return;
  }

  console.log(data);
  
});