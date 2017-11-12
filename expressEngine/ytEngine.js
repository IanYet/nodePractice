const fs = require('fs')
const express = require('express')
const app = express()

//what is the callback
//what is the option

app.engine('yt', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if(err) return callback(err)

        console.log(content.toString() + '!')
        let rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')

        return callback(null, rendered)
    })
})

app.set('views', './views')
app.set('views engine', 'yt')

app.get('/', (req, res) => {
    res.render('yt.yt', {title: 'hey', message: 'hello there'})
})

app.listen(3000)