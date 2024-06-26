// importar bibliotecas

const {Sequelize, Model, DataTypes} = require("sequelize");

// abrindo conexão com o banco de dados

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresaBD.sqlite"
});

// definindo a classe setor

class Setor extends Model{
    static init(sequelize){
        super.init({
            idsetor:{
              type: DataTypes.INTEGER,
              autoIncrement: true,
              allowNull: false,
              primaryKey: true,
            },

            nome:{
              type: DataTypes.STRING(40),
              allowNull: false
            },

            ramal:{
              type: DataTypes.STRING(10),
              allowNull: false
            },

            email:{
              type: DataTypes.STRING(30)
            }
        }, {sequelize, modelName: 'setor', tableName: 'setores'})
    }
}

// inicialização do modelo create table setor
Setor.init(sequelize);

// sincronismo
(async () => {
  await sequelize.sync({force: true});
})();