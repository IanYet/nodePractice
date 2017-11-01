const express = require('express')
const router = express.Router()

router.use((req, res, next) =>{
    console.log('time: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('index')
})

router.get('/about', (req, res) => {
    res.send('about birds')
})

module.exports = router