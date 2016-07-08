module.exports = function(app) {
  app.component('duplicatesDisplay', {
    templateUrl: './components/duplicates-display/template.html',
    controller: function() {},
    bindings: {
      addresses: '='
    }
  })
}
