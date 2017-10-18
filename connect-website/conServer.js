const connect = require('connect')
const static = require('connect-static')

const app = connect()
const option = {}

static(option, function(err, middleware) {
    // if (err) throw err;
    app.use('/', middleware);
  });