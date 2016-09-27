(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('navbarCtrl', ['$scope', '$state', function navbarCtrl($scope, $state){
		$scope.currentState = $state.current.name;
	}]);
}());