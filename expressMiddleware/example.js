const express = require('express')
const app = express()

const myLogger = (req, res, next) => {
  console.log('LOGGED')
  next()
}

const requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', function (req, res) {
  let responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(3000)