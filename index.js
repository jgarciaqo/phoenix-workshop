var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
}),
app.get('/contacts', function (req, res) {
  res.send('contacts')
})
 
app.get('/about-us', function (req, res) {
  res.send('Goodbye World')
})
 
app.listen(5000)
