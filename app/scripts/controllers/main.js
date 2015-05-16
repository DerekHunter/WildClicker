'use strict';

/**
 * @ngdoc function
 * @name wildClickerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wildClickerApp
 */
angular.module('wildClickerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
