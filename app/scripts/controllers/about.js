'use strict';

/**
 * @ngdoc function
 * @name todoYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoYeomanApp
 */
angular.module('todoYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
