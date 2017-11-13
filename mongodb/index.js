const express = require('express')
const mongodb = require('mongodb')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.text())
app.use(session({secret: 'my secret'}))

app.set('view engine', 'pug')
app.set('views', './views')