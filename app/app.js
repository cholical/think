(function () {

  'use strict';
  var app = angular.module('think', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.modal']);

  app.config(['$stateProvider', '$urlRouterProvider', configRoutes]);

  function configRoutes ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      })

    $urlRouterProvider.otherwise('/home');

    // $locationProvider.html5Mode({
    //   enabled: true
    // });

  };

  app.run(['$state', function ($state) {
    
  }]);

}());
