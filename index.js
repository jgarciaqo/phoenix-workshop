var express = require('express'); // Anything you "require" must be in the package.json file
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World from');
});

app.get('/account', function(req, res) {
   res.send('Account'); 
});

app.listen(5000);

