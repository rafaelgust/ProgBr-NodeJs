const http = require('http'), url = require('url'), fs = require('fs');

http.createServer((req, res) => {
    let path = url.parse(req.url).pathname;
    let fileName = `.${path}`;
 
    if(path === '' || path === '/'){
        fileName = 'index.html';
    }

    fs.readFile(fileName, (err, data) => {
        if(err){
            res.writeHead(404, {'Content-type': 'text/html'});
        }else{
            res.writeHead(200, {'Content-type': 'text/html'});
        }
    });

}).listen(3002, (err)=>{

});