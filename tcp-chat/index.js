const net  = require('net')

let count = 0

const server = net.createServer((conn) => {

    conn.setEncoding('utf8')
    conn.write(
        `
        > welcome to node-chat!
        > ${count} other poeple are connected at this time.
        > please write your name and press enter: `
    )

    count++

    conn.on('close', ()=> count--)

    conn.on('data', (data) => console.log(data))
})

server.listen(3000, () => {
    console.log('\033[96m server listening on *:3000\033[39m')
})