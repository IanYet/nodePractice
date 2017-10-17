const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if( 'GET' === req.method && '/images' === req.url.substr(0, 7) && '.jpg' === req.url.substr(-4)){

        fs.stat(__dirname + req.url, (err, stats) => {

            if(err || !fs.stats.isFile()){
                res.writeHead('404')
                res.end('404')
            }

            serve(__dirname+req.url, 'application/jpg')
        })
    }else if('GET' === req.method && '/' === req.url){

        serve(`${__dirname}/index.html`, 'text/html')
    }else {

        res.writeHead('404')
        res.end('404')
    }

    function serve(path, type) {
        res.writeHead(200, {'Content-Type': type})
    }
})

server.listen(3000)