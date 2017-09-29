const http = require('http')

http.createServer((req, res) => {

    if('/' === req.url){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`
        <form method = "post" action = "/url">
        <label>name</label>
        <input type = "text" name = "name">
        <input type = "submit" value = "OKAY">
        </form>`)
    }else if('/url' === req.url){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`you send a ${req.method} request`)
    }
}).listen(3000)