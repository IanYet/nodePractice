const express = require('express')
const app = express()

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

app.use(express.static('public'))

const server = app.listen(3000, () => {
    let host = server.address().address
    let port = server.address().port

    console.log(`exapmle app listening at http://${host}:${port}`)
})