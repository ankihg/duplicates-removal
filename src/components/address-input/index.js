module.exports = function(app) {
  app.component('addressInput', {
    templateUrl: './components/address-input/template.html',
    controller: ['UtilService', function(utilService) {
      var vm = this;
      vm.n = 100;
      return vm;
    }],
    bindings: {
      setAddresses: '&'
    }
  })
}
