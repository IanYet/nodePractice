const net = require('net')
const stdin = process.stdin, stdout = process.stdout

const client = net.connect(3000, 'localhost')

client.setEncoding('utf-8')

client.on('connect', () => console.log('connected!!'))

client.on('data', (data) => {
    stdout.write(data)
    stdin.resume()
    stdin.setEncoding('utf8')
    stdin.on('data', (data) => client.write(data))
})

