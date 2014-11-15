var express = require('express');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(express);
var constants = require('./app/config/constants');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.logger('dev')); 
app.use(express.bodyParser()); 

mongoose.connect(constants.databaseURL);

require('./app/routes.js')(app);

//app.get('/', function(res, req) { res.send(200, {'message' : 'Login successful.'}); });

app.get('/', function(req, res){
  res.send(200, {'message': 'hello world'});
});

app.listen(port);
console.log('The magic happens on port ' + port);