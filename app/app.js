'use strict';

var routes = {
  '/home' : {
    templateUrl: 'home-view/home-view.html',
    controller: 'View2Ctrl',
  }, '/page2' : {
    templateUrl: 'page2/page2.html',
    controller: 'Page2Ctrl',
  }
};

// Define the `phonecatApp` module
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'navBar',
  'carousel',
  'myApp.page2',
  'myApp.view2'
])

.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    for(var path in routes) {
      $routeProvider.when(path, routes[path]);
    }
    $routeProvider.otherwise({redirectTo: '/home'});


  }
])

