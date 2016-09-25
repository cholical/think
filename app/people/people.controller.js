(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('peopleCtrl', ['$scope', '$uibModal', 'peopleSvc', function peopleCtrl($scope, $uibModal, peopleSvc){
    
    $scope.openProfile = function (person) {
    	console.log("openPerson called");
    	var modalInstance = $uibModal.open({
	        templateUrl: 'app/profile/profile.html',
	        controller: 'profileCtrl',
	        size: 'lg',
	        resolve:  {
	        	person: function () {
	        		return person;
	        	}
	        }
	    });
    }

    /***** Main *****/
    peopleSvc.getPeople().then(function (data) {
    	$scope.people = data;
    });

	}]);
}());