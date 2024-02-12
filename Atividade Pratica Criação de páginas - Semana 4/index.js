const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const porta = 443;

app.use(session({secret: '1234567890'}));

app.use(bodyParser.urlencoded({extended: true}))

var login = 'admin'
var senha = '1234'

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')
app.set('views', path.join(__dirname, './'))

app.get('/', (req, res) => {
  if(req.session.login){
    res.render('logado')
    console.log('Usuário logado: ' + req.session.login)
  }
  else{
    res.render('home')
  }


})


app.post('/', (req, res) =>{
  if(req.body.password == senha && req.body.login == login){
    req.session.login = login
    res.render('logado')
  }
  else{
    res.render('home')
  }
})

app.get('/email', (req, res) => {
  if(req.session.login){
    res.render('email')
    console.log(req.session.login)
  }
  else{
    res.render('home')
  }
})

app.post('/email', (req, res) => {
  var email = req.body.email
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "32d40c03048fa0",
      pass: "839c80f3a84ece"
    }
  });

  var message = {
    from: email,
    to: email,
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };

  transport.sendMail(message, function(err) {
    if(err){
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: e-mail não enviado!'
        
      })
    }  else {
      return res.status(200).json({
        erro: false,
        mensagem: 'E-mail enviado com sucesso!'
      })
    }
  }) 
})


app.listen(porta, () => {
  console.log('Servidor rodando')
})