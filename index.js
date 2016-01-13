var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World from 5000 using nodemon')
})

app.listen(5000)
