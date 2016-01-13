var express = require('express'); // Anything you "require" must be in the package.json file
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello from 5 restart')
})

app.get('/products', function (req, res) {
    res.send("Products")
})
 
app.get('/about-us', function (req, res) {
  res.send('Goodbye World')
})

app.listen(5000);
