'use strict';
var angular = require('angular');

var app = angular.module('app', []);

app.controller('MainController', [function() {
  var vm = this;
  vm.plz = 'respond';
  return vm;
}])
