var express = require('express'); // Anything you "require" must be in the package.json file
var path = require('path');
var app = express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index.jade', { content: 'home'});
}),

app.get('/contacts', function (req, res) {
  res.render('contacts.jade', { title: 'Hey', message: 'contacts'});
}),
app.get('/products', function (req, res) {
    res.render('products.jade', { title: 'Hey', message: 'products'});
})
 app.get('/about-us', function (req, res) {
  res.render('aboutus.jade', { title: 'Hey', message: 'about-us'});
})

app.listen(5000)
