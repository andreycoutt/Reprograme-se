// Importando bibliotecas e arquivos
const database = require("./db/db");
const express = require("express");
const app = express();
const Video = require("./models/Video");
const VideoRoutes = require("./routes/routesVideo");
const hand = require("express-handlebars");

//CONTROLLERS
const VideosControllers = require("./controllers/ControllerVideo");

app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true, }));

app.use(express.json());
app.use(express.static("public"));

app.use("/", VideoRoutes);


try {
  database.sync().then(() => {
    app.listen(9443, () => {
      console.log("servidor rodando");
    })
  })
}

catch (erro) {
  console.log("houve uma falha ao sincronizar com o banco de dados", erro);
}  