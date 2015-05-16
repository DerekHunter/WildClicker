'use strict';

/**
 * @ngdoc function
 * @name wildClickerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wildClickerApp
 */
angular.module('wildClickerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
