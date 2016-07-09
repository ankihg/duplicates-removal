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
      vm.uniqueAddresses = null;


      vm.run = function() {
        console.log('run');
        utilService.removeDuplicates(vm.addressesLinkedList);
        vm.uniqueAddresses = vm.addressesLinkedList.toArr();
      }

      return vm;

    }],
    controllerAs: 'appCtrl'
  })
}
