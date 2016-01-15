var express = require('express'); // Anything you "require" must be in the package.json file
var path = require('path');
var app = express();

var homeHanlder = require('./lib/homeHandler');
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
  res.render('contacts.jade', { content : data.phoneNo});
}),
app.get('/products', function (req, res) {
    res.render('products.jade', { title: 'Hey', message: 'products'});
})
 app.get('/about-us', function (req, res) {
  res.render('aboutus.jade', { title: 'Hey', message: 'about-us'});
})
 app.get('/media', function (req, res) {
  res.render('media.jade', { title: 'Hey', message: 'media'});
})
app.listen(5000)
