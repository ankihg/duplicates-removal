module.exports = function(app) {
  app.component('uniqueDisplay', {
    templateUrl: './components/unique-display/template.html',
    controller: function() {},
    bindings: {
      uniqueAddresses: '='
    }
  })
}
