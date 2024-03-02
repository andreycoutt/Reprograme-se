const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('escola.sqlite', (err)=>{
  if(err){
    return console.error(err.message);
  }
  console.log('Conectado ao banco de dados com sucesso');

  // db.run("CREATE TABLE aluno(matricula int primary key, nome varchar(60), email varchar(40), cidade varchar(60))");
}); 

/*
db.run("INSERT INTO aluno(matricula, nome, email, cidade) values(2024123220, 'Andrey Couto', 'contato.andreyyy@gmail.com', 'Cachoeiro de Itapemirim')");

db.run("INSERT INTO aluno(matricula, nome, email, cidade) values(1234, 'Fulano 01', 'fulano01@gmail.com', 'Cachoeiro de Itapemirim')");

db.run("INSERT INTO aluno(matricula, nome, email, cidade) values(5678, 'Fulano 02', 'fulano02@gmail.com', 'Cachoeiro de Itapemirim')");
*/

db.each("select matricula, nome from aluno", (err, row)=>{
    if(err){
      console.error(err.message);
    }
    console.log(row.matricula + "\t" + row.nome);
  });
  