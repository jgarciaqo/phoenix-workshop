var express = require('express'); // Anything you "require" must be in the package.json file
var path = require('path');
var app = express();

var homeHanlder = require('./lib/homeHandler');
var mediaHandler = require('./lib/mediaHandler');
var productHanlder = require('./lib/productHandler');
var contact = require('./lib/contactus');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  var data = homeHanlder();
  res.render('index.jade', { content: data.content});
}),

app.get('/contacts', function (req, res) {
    var data = contact();
  res.render('contacts.jade', {phoneNo:data.phoneNo});
}),
app.get('/products', function (req, res) {
    res.render('products.jade', { title: 'Hey', message: 'products'});
    res.render('products.jade', { title: 'Hey', message: 'products'});
    var data = productHanlder();
    res.render('products.jade', { content: data.content});
})
 app.get('/about-us', function (req, res) {
  res.render('aboutus.jade', { title: 'Hey', message: 'about-us'});
})
app.get('/media', function (req, res) {
  var data = mediaHandler();
  res.render('media.jade', { content: data.content, images:data.images});
})
app.listen(5000)
