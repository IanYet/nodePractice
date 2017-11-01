const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('GET')
})

app.post('/', (req, res) => {
    res.send('POST')
})

// strang next()
app.all('/secret', (req, res, next) => {
    console.log('secret')
    next()
},  (req, res) => {
    res.send('Hello!');
  })

// function next() {
//     console.log('next')
// }

app.listen('3000', () => console.log('connct'))