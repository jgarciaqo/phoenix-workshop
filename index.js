var express = require('express'); // Anything you "require" must be in the package.json file
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World from');
});

app.get('/about-us', function(req, res) {
   res.send('About Us'); 
});

app.listen(5000);

