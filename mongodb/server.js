const mongoClient = require('mongodb').MongoClient
, assert = require('assert')

const url = 'mongodb://localhost:27017'

mongoClient.connect(url, (err, db) => {
    assert.equal(null, err)
    console.log('connected')

    db.close()
})
