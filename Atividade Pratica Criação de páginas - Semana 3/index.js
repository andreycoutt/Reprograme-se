const http = require('http');
const formidavel = require('formidable');
const fs = require('fs');
const port = 443;

function listarArquivos(diretorio, arquivos) {

   if (!arquivos)
      arquivos = []
   let listagemArquivos = fs.readdirSync(diretorio)
   console.log(listagemArquivos)
}

const servidor = http.createServer((req, res) => {
  if(req.url ==  '/enviodearquivo'){
    const form = new formidavel.IncomingForm();
    form.parse(req, (err, campos, arquivos) => {
      const urlAntiga = arquivos.filetoupload[0].filepath;
      const urlNova = './pasta/' + arquivos.filetoupload[0].originalFilename;
      var rawData = fs.readFileSync(urlAntiga);
      fs.writeFile(urlNova, rawData, function(err){
        if(err) console.log(err)
        res.write('Arquivo enviado com sucesso!');
        res.end();
      });
    })
  }  else if(req.url == '/listar'){
    listarArquivos('./enviodearquivos')
    res.write('arquivos listados com sucesso!');
    res.end();
  } else {
    fs.readFile('index.html', (err, arquivos) => {
      res.write(arquivos)
      return res.end();
    })
  }
})

servidor.listen(port, () => { console.log('Servidor rodando') })