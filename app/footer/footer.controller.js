(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('footerCtrl', ['$scope', '$state', 'formSvc', function footerCtrl($scope, $state, formSvc){

		$scope.submitForm = function () {
			formSvc.submitFooterContact();
			$scope.contact.sent = true;
		}

		$scope.resetForm = function () {
			$scope.contact = angular.copy(cleanContact);
		}

		$scope.goRonald = function () {
			$state.go('people.profile', {name: "ronald_ding"});
		}

		/***** Main *****/
		var cleanContact = {
			name: "",
			email: "",
			message: "",
			sent: false
		}

		$scope.contact = angular.copy(cleanContact);

	}]);
}());