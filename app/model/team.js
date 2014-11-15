var mongoose = require('mongoose');

var schema = mongoose.Schema({
  userIDs: Array
});

module.exports = mongoose.model('User', schema);