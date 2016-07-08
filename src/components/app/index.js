module.exports = function(app) {
  app.component('app', {
    templateUrl: './components/app/template.html',
    controller: function() {
      var vm = this;

      vm.addresses = [
        'plz',
        'respond'
      ]

      return vm;

    },
    controllerAs: 'appCtrl'
  })
}
