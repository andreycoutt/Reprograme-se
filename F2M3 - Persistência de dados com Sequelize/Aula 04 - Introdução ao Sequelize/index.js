// importar bibliotecas

const {Sequelize, Model, DataTypes} = require("sequelize");

// abrindo conexão com o banco de dados

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresaBD.sqlite"
});

(async () => {
  // sincronismo
  await sequelize.sync({force: true});
})();