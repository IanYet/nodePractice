const static = require('st')
const http = require('http')

http.createServer(static(__dirname)).listen(3000)