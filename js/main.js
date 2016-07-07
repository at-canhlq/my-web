'use strict';

var myWebApp = angular.module('myWebApp', ['ngRoute', 'myWebController', 'myWebServices']);
myWebApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'html/home.html'
    })
    .when('/about', {
      templateUrl: 'html/about.html'
    })
    .when('/myapp', {
      templateUrl: 'html/myapp.html',
      controller: 'MyAppController'
    })
    .when('/myapp/:id', {
      templateUrl: 'html/details.html',
      controller: 'DetailsController'
    })
    .otherwise({redirectTo: '/home'});
}]);