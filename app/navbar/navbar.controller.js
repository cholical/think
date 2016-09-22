(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('navbarCtrl', ['$scope', '$state', function navbarCtrl($scope, $state){
		console.log("navbar controller working");
		$scope.currentState = $state.current.name;
		console.log($state.current);

	}]);
}());