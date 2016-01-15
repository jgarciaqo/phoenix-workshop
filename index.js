var express = require('express'); // Anything you "require" must be in the package.json file
var path = require('path');
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
}),
app.get('/contacts', function (req, res) {
  res.send('contacts')
}),
app.get('/products', function (req, res) {
    res.send("Products")
})
 app.get('/about-us', function (req, res) {
  res.send('Goodbye World')
})

app.listen(5000)
