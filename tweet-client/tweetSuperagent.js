const request = require('superagent')

request.get('http://twitter.com/search.json').send({q: 'NASA'}).end((res) => {console.log(res.body)})