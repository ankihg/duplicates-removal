module.exports = function(app) {
  app.component('app', {
    templateUrl: './components/app/template.html',
    controller: ['$scope', 'UtilService', function($scope, utilService) {
      var vm = this;

      vm.addresses = null;
      vm.addressesLinkedList = null;
      vm.uniqueAddresses = null;
      vm.runtime = 0;

      vm.setAddresses = function(n) {
        vm.uniqueAddresses = null;

        vm.addressesLinkedList = utilService.generateDuplicates(n);
        vm.addresses = this.addressesLinkedList.next ? this.addressesLinkedList.next.toArr() : null;
      }

      vm.run = function() {
        console.log('run');
        var start = new Date();
        utilService.removeDuplicates(vm.addressesLinkedList);
        var end = new Date();
        vm.runtime = end - start;
        vm.uniqueAddresses = this.addressesLinkedList.next ? this.addressesLinkedList.next.toArr() : null;
      }

      return vm;

    }],
    controllerAs: 'appCtrl'
  })
}
