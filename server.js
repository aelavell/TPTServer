var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.logger('dev')); 
app.use(express.bodyParser()); 

require('./app/routes.js')(app);

//app.get('/', function(res, req) { res.send(200, {'message' : 'Login successful.'}); });

app.get('/', function(req, res){
  res.send(200, {'message': 'hello world'});
});

app.listen(port);
console.log('The magic happens on port ' + port);