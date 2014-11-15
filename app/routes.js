module.exports = function(app) {
  var account = require('./api/account')();
  app.post('/api/v1/account/login.json', account.login);
  app.get('/api/v1/x.json', function(req, res) { res.send(200, {'message' : 'Login successful.'}); });
};