const express = require('express')
const app = express()

//url leaf path must be a file instead of folder
app.use('/static',express.static('public'))

const server = app.listen(3000, () => console.log('connect'))