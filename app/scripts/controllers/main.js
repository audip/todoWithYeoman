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
    $scope.todos = [];
    $scope.addTodo = function (){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
    };
  });
