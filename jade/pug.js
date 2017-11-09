const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('pug', {title: 'hey', message: 'hello there'})
})

app.listen(3000)