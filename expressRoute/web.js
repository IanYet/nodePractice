const bird = require('./birds')
const express = require('express')
const app = express()

app.use('/', bird)
app.listen(3000, () => {})