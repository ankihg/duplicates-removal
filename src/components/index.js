module.exports = function(app) {
  require('./app')(app);
  require('./duplicates-display')(app);
  require('./address-input')(app);
  require('./unique-display')(app);
  require('./runner')(app);
  require('./about-me')(app);
}
