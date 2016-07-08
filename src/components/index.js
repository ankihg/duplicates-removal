module.exports = function(app) {
  require('./app')(app);
  require('./duplicates-display')(app);
}
