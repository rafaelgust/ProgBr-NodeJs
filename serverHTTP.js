const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h1>Hello World!!!</h1>');
}).listen(3001, (err)=>{
    err ? console.log(err + ' Servidor não foi criado!') : console.log('Servidor criado na porta 3001');
});

