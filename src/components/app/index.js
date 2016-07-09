module.exports = function(app) {
  app.component('app', {
    templateUrl: './components/app/template.html',
    controller: ['$scope', 'UtilService', function($scope, utilService) {
      var vm = this;

      vm.addresses = [
        'plz',
        'respond'
      ]

      vm.addressesLinkedList = null;
      vm.unqiueAddresses = null;

      return vm;

    }],
    controllerAs: 'appCtrl'
  })
}
