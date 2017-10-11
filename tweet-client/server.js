const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {
    let body = ''

    req.on('data', (chunk) => {
        body = body +chunk
    })

    req.on('end', () => {
        res.writeHead(200)
        res.end('Done')
        console.log('\ngot name: \033[90m' + qs.parse(body).name + '\033[39m\n')
    })
}).listen(3000)