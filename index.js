var express = require('express'); // Anything you "require" must be in the package.json file
var path = require('path');
var app = express();

var homeHanlder = require('./lib/homeHandler');
<<<<<<< HEAD
var aboutusHanlder = require('./lib/about-us');
=======
var mediaHandler = require('./lib/mediaHandler');
var productHanlder = require('./lib/productHandler');
>>>>>>> 376f6ab527a2f1c4dc7d2eceeb4d6ed147c173f3


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  var data = homeHanlder();
  res.render('index.jade', { content: data.content});
}),

app.get('/contacts', function (req, res) {
  res.render('contacts.jade', { title: 'Heya', message: 'contacts'});
}),
app.get('/products', function (req, res) {
    res.render('products.jade', { title: 'Hey', message: 'products'});
    res.render('products.jade', { title: 'Hey', message: 'products'});
    var data = productHanlder();
    res.render('products.jade', { content: data.content});
})
 app.get('/about-us', function (req, res) {
 	var data = aboutusHanlder();
  res.render('aboutus.jade', { content: data.content});
})
app.get('/media', function (req, res) {
  var data = mediaHandler();
  res.render('media.jade', { content: data.content, images:data.images});
})
app.listen(5000)
