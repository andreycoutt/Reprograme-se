const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const porta = 443;

app.get('/', (req, res) =>{
  res.send('Enviando e-mail com nodemailer');
})


app.get('/sendemail', async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "32d40c03048fa0",
      pass: "839c80f3a84ece"
    }
  })

  var message = {
    from: "sender@server.com",
    to: "receiver@sender.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  }

  transport.sendMail(message, function(err){
    if(err)
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: e-mail não enviado'
      })
    else
      return res.json({
        erro: false,
        mensagem: 'E-mail enviado com sucesso'
      })
    
    
  })
  
  
}) // esse seepa



app.listen(porta, ()=> {
  console.log('Servidor rodaando');
})


