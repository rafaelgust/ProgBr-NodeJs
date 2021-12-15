const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello World!!!');
}).listen(3000, (err)=>{
    err ? console.log(err + 'Servidor não foi criado!') : console.log(err + 'Servidor criado na porta 3000');
});

