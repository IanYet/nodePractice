const express = require('express')
const app = express()

app.use((res, req, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
})

app.use('/user', (res, req, next) => {
    console.log(`request url: ${req.originalUrl}`)
    next()
}, (res, req, next) => {
    console.log(`request type: ${req.method}`)
    next()
})

app.get('/', (req, res) => {
    res.send('index')
})

app.get('/user', (req, res, next) => {
    res.send('user')
})

app.listen(3000)