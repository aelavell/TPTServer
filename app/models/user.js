var mongoose = require('mongoose');

var schema = mongoose.Schema({
  fbID: String,
  teamIDs: Array
});

module.exports = mongoose.model('Team', schema);