module.exports = function(app) {
  app.component('addressInput', {
    templateUrl: './components/address-input/template.html',
    controller: ['$scope', 'UtilService', function($scope, utilService) {
      $scope.utilService = utilService;
    }]
  })
}
