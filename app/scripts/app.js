'use strict';

/**
 * @ngdoc overview
 * @name wildClickerApp
 * @description
 * # wildClickerApp
 *
 * Main module of the application.
 */
angular
  .module('wildClickerApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
