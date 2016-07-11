module.exports = function(app) {
  app.component('duplicatesDisplay', {
    templateUrl: './components/duplicates-display/template.html',
    bindings: {
      addresses: '='
    }
  })
}
