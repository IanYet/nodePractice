require('http').createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('hello')

    // setTimeout(() => {
    //     res.end('<b>world</b>')
    // }, 500)

    // console.log(req)
    // console.log(res)
    res.end('<strong>hello world</strong>');
}).listen(3000)