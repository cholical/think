(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('profileCtrl', ['$scope', '$uibModalInstance', 'peopleSvc', 'person', function profileCtrl($scope, $uibModalInstance, peopleSvc, person){
    


    /***** Main *****/
    if (person) {
    	$scope.person = person;
    } else {
    	peopleSvc.getPeople().then(function (data) {
	    	$scope.people = data;
	    	//Fix when custom modal urls are added through modal state provider
	    	//Requires state params to match personId
	    });
    }

	}]);
}());