'use strict';

/**
 * @ngdoc function
 * @name todoYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoYeomanApp
 */
angular.module('todoYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
