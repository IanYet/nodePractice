const express = require('express')
const router = express.Router()
const app = express()

router.use((res, req, next) => {
    console.log(`time: ${Date.now()}`)
    next()
})

router.use('/user/:id', (req, res, next) => {
    console.log('url:')
    next()
}, (req, res, next) => {
    console.log('type:')
    next()
})

app.use('/', router)