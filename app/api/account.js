var User = require('../models/user');

module.exports = function(passport) {
  var account = {};

  account.login = function(req, res) {
    var fbID = req.param('fbID');
    
    User.findOne({ 'fbID' : fbID }, function(err, user) {
      if (err) { res.json(400, { 'code' : 90, 'message' : 'Database error'  }); }
      if (user !== null) { res.json(200, { 'code' : 1, 'message' : 'Logged in successfully.', 'id' : user.id }); }
      else {
        var newUser = new User();

        newUser.fbID = fbID;
        
        newUser.save(function(err) {
          if (err) { res.json(400, { 'code' : 90, 'message' : 'Database error'  }); }
          else { res.json(200, { 'code' : 0, 'message' : 'Registered successfully.', 'id' : newUser.id }); }
        });
      }
    });
  };

  return account;
};
