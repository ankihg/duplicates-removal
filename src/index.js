'use strict';
var angular = require('angular'),
  ngMaterial = require('angular-material');

var app = angular.module('app', [ngMaterial]);

require('./components')(app);

app.controller('MainController', [function() {
  var vm = this;
  vm.plz = 'respond';
  return vm;
}])
