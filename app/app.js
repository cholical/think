(function () {

  'use strict';
  var app = angular.module('think', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.modal', 'ngSanitize', 'ngAnimate']);

  app.config(['$stateProvider', 'modalStateProvider', '$urlRouterProvider', configRoutes]);

  function configRoutes ($stateProvider, modalStateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      })
      .state('people', {
        url: '/people',
        templateUrl: 'app/people/people.html',
        controller: 'peopleCtrl'
      })

      modalStateProvider.state('people.profile', {
        url: '/:name',
        templateUrl: 'app/profile/profile.html',
        controller: 'profileCtrl',
        size: 'lg'
      });

    $urlRouterProvider.otherwise('/home');

    // $locationProvider.html5Mode({
    //   enabled: true
    // });

  };

  app.run(['$state', function ($state) {
    
  }]);

}());
