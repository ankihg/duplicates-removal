'use strict';
var angular = require('angular'),
  ngMaterial = require('angular-material');

var app = angular.module('app', [ngMaterial]);

require('./components')(app);

app.config(['$mdThemingProvider', function($mdThemingProvider) {
  $mdThemingProvider.setDefaultTheme('none');
}]);
