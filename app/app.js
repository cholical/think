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
      .state('alumni', {
        url: '/alumni',
        templateUrl: 'app/alumni/alumni.html',
        controller: 'alumniCtrl'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'eventsCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'aboutCtrl'
      })
      .state('programs', {
        url: '/programs',
        templateUrl: 'app/programs/programs.html',
        controller: 'programsCtrl'
      })
      .state('programs.thursdays', {
        url: '/thinkthursdays',
        templateUrl: 'app/thursdays/thursdays.html',
        controller: 'thursdaysCtrl'
      })
      .state('programs.rides', {
        url: '/rideswiththink',
        templateUrl: 'app/rides/rides.html',
        controller: 'ridesCtrl'
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
