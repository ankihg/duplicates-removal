module.exports = function(app) {
  app.component('app', {
    templateUrl: './components/app/template.html',
    controller: [function() {
      var vm = this;

      vm.generateDuplicates = require(__dirname+'/../../lib/generate-duplicates-list');
      vm.removeDuplicates = require(__dirname+'/../../lib/remove-duplicates');

      vm.addresses = null;
      vm.addressesLinkedList = null;
      vm.uniqueAddresses = null;
      vm.runtime = 0;

      vm.setAddresses = function(n) {
        vm.uniqueAddresses = null;

        vm.addressesLinkedList = vm.generateDuplicates(n);
        vm.addresses = this.addressesLinkedList.next ? this.addressesLinkedList.next.toArr() : null;
      }

      vm.run = function() {
        var start = new Date();
        vm.removeDuplicates(vm.addressesLinkedList);
        var end = new Date();
        vm.runtime = end - start;
        vm.uniqueAddresses = this.addressesLinkedList.next ? this.addressesLinkedList.next.toArr() : null;
      }

      return vm;

    }],
    controllerAs: 'appCtrl'
  })
}
