const http = require('http'), url = require('url'), fs = require('fs');

http.createServer((req, res) => {
    let path = url.parse(req.url).pathname;
    if(path === '' || path === '/'){
        path = '/index.html';
    }
    let fileName = `.${path}`;

    fs.readFile(fileName, (err, data) => {
        if(err){
            res.writeHead(404, {'Content-type': 'text/html; charset=utf-8'});
            res.end("<h1>Página não foi Encontrada !!!</h1>");
        }else{
            res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
            res.write(data);
            res.end();
        }
    });

}).listen(3002, (err)=>{
    err ? console.log(err + ' Não foi possível criar o servidor') : console.log('Servidor criado na porta 3002');
});