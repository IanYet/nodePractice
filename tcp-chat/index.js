const net  = require('net')

let count = 0, users = {}

const server = net.createServer((conn) => {

    conn.setEncoding('utf8')
    conn.write(
        `\n> welcome to node-chat! \n> ${count} other poeple are connected at this time. \n> please write your name and press enter: `
    )

    count++

    conn.on('close', ()=> count--)

    let nickname

    conn.on('data', (data) => {

        data = data.replace('\r\n', '')
        
        if(!nickname){

            if(users[data]){
                conn.write('\033[93m> nickname has already in use. try again: \033[39m')
                return
            }else{
                nickname = data
                users[nickname] = conn
                for (let i in users){
                    users[i].write(`> ${nickname} joined the room \n`)
                }
            }
        } else {

            for(let i in users){

                if(i !== nickname) {
                    users[i].write(`> ${nickname} : ${data} \n`)
                }
            }
        }
    })
})

server.listen(3000, () => {
    console.log('\033[96m server listening on *:3000\033[39m')
})