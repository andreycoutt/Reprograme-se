const http = require('http');
const fs = require('fs');
const readline = require('readline');
const porta = 443;

const servidor = http.createServer((req, res) => {
  fs.readFile('pagina.html', (err, arquivo) => {
    res.writeHead(200,{'Content-typer':'text/html'})
    res.write(arquivo)
    return res.end;
  })

  fs.appendFile('texte.txt', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed felis metus. Maecenas gravida tempor ligula malesuada tempus. Ut purus lacus, lacinia viverra porttitor in, lacinia id ante. Integer at ipsum id ipsum elementum laoreet. In sollicitudin laoreet lorem at laoreet. Quisque cursus sed dui sed rutrum. Donec placerat ante sed arcu semper, a tristique nunc sagittis. Phasellus pretium sollicitudin tincidunt. In felis justo, venenatis a ipsum sed, congue vestibulum dui. Morbi fermentum arcu consequat est aliquam, in ullamcorper lorem congue.', (err) => {
    if(err) throw err;
    console.log("Criado")
    res.end()
  })

  async function readFileByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
  });
  for await (const line of rl) {
  console.log(line);
  }
  }

  readFileByLine('texte.txt')


  
})

servidor.listen(porta, () =>  {console.log('Servidor rodando')})