'use strict';

/**
 * @ngdoc overview
 * @name bilinigualsApp
 * @description
 * # bilinigualsApp
 *
 * Main module of the application.
 */
angular
  .module('bilinigualsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('userInfo', ['$http', function userInfoService($http) {
      var service = {};
      service.get = function userInfoServiceGet(name, callback) {
        $http({
          method: 'GET',
          url: '/users?name=' + name.toString()
        }).then(function successCallback(response) {
          callback(null, response);
        }, function errorCallback(response) {
          callback(response);
        });
      };
      return service;
  }]);
