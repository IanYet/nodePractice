require('http').createServer((req, res)=> {
    res.writeHead(200, {'Content-type': 'text/html'})

    res.end('<h1>hello world</h1>');
}).listen(3000)