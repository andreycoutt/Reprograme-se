const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));

// Implementar o comando de decisão para verificar se o cidadão pode, ou não, se aposentar
if((idade >= 65) || (tempo >= 30) || (idade >= 60 && tempo >= 25)){
  
// Implementar os comandos de decisão aninhados para calcular o salário de aposentadoria (80% ou 60%)
    if(tempo > 20){
      novo_salario = parseFloat(salario * 0.80);
        
        if((novo_salario < 1212.00) || (novo_salario > 7087,22)){
           if(novo_salario < 1212.00){
            console.log("Você pode se aposentar!");
            console.log("Seu salário de aposentado será: 1212.00");
            
           }else if(novo_salario > 7087.22){
            console.log("Você pode se aposentar!");
            console.log("Seu salário de aposentado será: 7087.22");     
        
        }else{
          console.log("Você pode se aposentar!");
          console.log("Seu salário de aposentado será:", novo_salario);
          }
        }  
        


          
    }else if(tempo <= 20){
      novo_salario = parseFloat(salario * 0.60);
        if((novo_salario < 1212.00) || (novo_salario > 7087,22)){
           if(novo_salario < 1212.00){
            console.log("Você pode se aposentar!");
            console.log("Seu salário de aposentado será: 1212.00");
            
           }else if(novo_salario > 7087.22){
            console.log("Você pode se aposentar!");
            console.log("Seu salário de aposentado será: 7087.22");     
        
          }else{
          console.log("Você pode se aposentar!");
          console.log("Seu salário de aposentado será:", novo_salario);
          }
        } 
    }

}else{
  console.log("Você ainda não pode se aposentar.")
}

