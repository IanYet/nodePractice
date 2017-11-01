const express = require('express')
const app = express()

app.use(express.static('node_modules'))

const server = app.listen(3000, () => {})