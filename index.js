var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello from 5000 restart')
})

app.get('/products', function (req, res) {
    res.send("Products")
})

app.get('/about-us', function (req, res) {
    res.send("About us")
})

app.get('/contact', function (req, res) {
    res.send("Contact")
})
 
app.listen(5000)

