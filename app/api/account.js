//var User = require('../models/user');

module.exports = function(passport) {
  var account = {};

  account.login = function(req, res) {
    res.json(200, {'message' : 'Login successful.'});
    /*validation.validateParametersExisting(req, ['username', 'password'], function(err) {
      if (err) { return res.json(400, {'errors': [err]});}

      passport.authenticate('local-account-login', function(err, user, info) {
        if (err) { return res.json(400, {'errors' : [err]}); }
        if (!user) { return res.json(400, {'errors' : [info]}); }
        if (user) { 
          req.logIn(user, function(err) {
            if (err) { return res.json(400, {'error' : [errorDefs.loginError]}); }
            return res.json(200, {'message' : 'Login successful.'});
          });
        }
      })(req, res);
    });*/
  };

  return account;
};
