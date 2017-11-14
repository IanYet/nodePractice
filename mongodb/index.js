const express = require('express')
const mongodb = require('mongodb')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.text())
app.use(session({secret: 'my secret'}))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', {authenticated: false})
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.listen(3000)