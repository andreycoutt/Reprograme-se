const axios = require("axios");

module.exports = class Services{
   static async TarefaCreate(req,res){
   let valores = req.body;
      const options = {
      url: 'https://d050ebd5-0954-4b70-8d72-be54c4ff8af2-00-20bo6qggpukp3.janeway.replit.dev/tarefas/Cadastrar',
      method: 'POST',
      data: valores
      };
     axios(options);
     const mensagem = "Cadastro realizado com sucesso";
     res.render("mensagem", {mensagem});
   }

  //LISTAR
   static async TarefaListar(req,res){
   const options = {
   url: 'https://d050ebd5-0954-4b70-8d72-be54c4ff8af2-00-20bo6qggpukp3.janeway.replit.dev/tarefas',
   method: 'GET',
   data: {}
   };
   axios(options).then(response => {
   console.log(response.data);
   const tarefa =response.data
   res.render("tarefas/listar",{tarefa});
   });
   }
  
  //Update
   static async TarefaUpdate(req,res){

   let valores = req.body;
   const options = {
   url: 'https://206c073d-6a5e-4b28-b753-e8b54bd4d3e3-00-22sa8xx3l8wt6.worf.replit.dev/tarefas/'+valores.id_tarefa,
   method: 'PUT',
   data: valores
   };
   axios(options);
   const mensagem = "Registro atualizado com sucesso";
   res.render("mensagem",{mensagem});
   }
  
  //Delete
   static async TarefaDelete(req,res){
   let id_tarefa = req.body.id_tarefa;
   const options = {
   url: 'https://listatarefas.antonioizo.repl.co/tarefas/'+id_tarefa,
   method: 'DELETE'
   };
   axios(options);
   const mensagem = "Tarefa excluída com sucesso!";
   res.render("mensagem",{mensagem});
   }


}