const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './cliente.sqlite'
  });

try{
  sequelize.authenticate();
  console.log("banco de dados conectado com sucesso!");
}
catch(erro){
  console.log("erro ao conectar", erro);
}

module.exports = sequelize;