var buttonState = false;

var setButtonState = function(req, res) {
  var state = req.param('buttonState');
  if (state !== null) {
    buttonState = state; 
    res.json(200);
  }
  else {
    res.json(400);
  }
}

var getButtonState = function(req, res) {
  res.json(200, { 'buttonState' : buttonState });
}

module.exports = function(app) {
  app.post('/api/v1/setButtonState.json', setButtonState);
  app.get('/api/v1/getButtonState.json', getButtonState);
};