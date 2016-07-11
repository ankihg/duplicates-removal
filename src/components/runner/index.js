module.exports = function(app) {
  app.component('runner', {
    templateUrl: './components/runner/template.html',
    bindings: {
      run: '&',
      runtime: '@'
    }
  })
}
