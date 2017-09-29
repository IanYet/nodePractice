const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {

    if('/' === req.url){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(`
        <form method = "post" action = "/url">
        <label>name</label>
        <input type = "text" name = "name">
        <input type = "submit" value = "OKAY">
        </form>`)
    }else if('/url' === req.url && 'POST' === req.method){
        let body = ''

        req.on('data', (chunk) => {
            body += chunk

            console.log(chunk.toString('utf-8')+'\n')
        })

        req.on('end', ()=>{
            res.writeHead(200, {'Content-Type': 'text/html'})
            // res.end(`<P>Content-Type: ${req.headers['content-type']}</P>
            // <p>Data: ${body}</p>`)

            res.end(`your name is ${qs.parse(body).name}`)
        })
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end(`<p>Oops, you page cannot find</p>`)
    }
}).listen(3000)