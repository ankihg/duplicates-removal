module.exports = function(app) {
  app.component('addressInput', {
    templateUrl: './components/address-input/template.html',
    controller: ['UtilService', function(utilService) {
      var vm = this;
      vm.n = 100;

      vm.setAddresses = function(n) {
        this.addressesLinkedList = utilService.generateDuplicates(n);
        this.addresses = this.addressesLinkedList.toArr()
      }

      return vm;
    }],
    bindings: {
      addresses: '=',
      addressesLinkedList: '='
    }
  })
}
