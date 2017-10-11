const http = require('http')
const qs = require('querystring')
const stdin = process.stdin
const stdout = process.stdout

function send(theName){

    http.request({
        host: '127.0.0.1',
        port: '3000',
        url: '/',
        method: 'POST'
    }, (res) => {
        let body = ''

        res.setEncoding('utf8')
        res.on('data', () =>{})
        res.on('end', () => {
            console.log('\n \033[90m request complete!\033[39m')
            stdout.write('\n your name: ')
        })
    }).end(qs.stringify({name: theName}))
}

stdout.write('\n your name: ')
stdin.resume()
stdin.setEncoding('utf-8')
stdin.on('data', (name) => {
    send(name.replace('\n', ''))
})