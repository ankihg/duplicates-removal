'use strict';
var angular = require('angular');

var app = angular.module('app', []);

require('./components')(app);

app.controller('MainController', [function() {
  var vm = this;
  vm.plz = 'respond';
  return vm;
}])
