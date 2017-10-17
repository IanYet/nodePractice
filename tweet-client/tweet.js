const http = require('http')
const qs = require('querystring')
const stdin = process.stdin
const stdout = process.stdout
const argv = process.argv

const search = argv.slice(2).join(' ').trim()

if(!search.length){
    return console.log('\nUsage: node tweet.js <search key words>\n')
}
console.log('\nsearching for: \033[96m' + search + '\033[39m\n')

http.request({
    host: 'search.twitter.com',
    path: '/search.json?' + qs.stringify({q: search}),
    method: 'GET'
}, (res) => {
    let body = ''
    res.setEncoding('utf8')

    res.on('data', (chunk) => {
        body += chunk
    })

    res.on('end', () => {
        console.log(JSON.parse(body).result)
    })
}).end()