(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('peopleCtrl', ['$scope', '$state', '$uibModal', 'peopleSvc', function peopleCtrl($scope, $state, $uibModal, peopleSvc){
    
    $scope.openProfile = function (person) {
    	// console.log("openPerson called");
    	// var modalInstance = $uibModal.open({
	    //     templateUrl: 'app/profile/profile.html',
	    //     controller: 'profileCtrl',
	    //     size: 'lg',
	    //     resolve:  {
	    //     	person: function () {
	    //     		return person;
	    //     	}
	    //     },
	    //     windowClass: "profile-width"
	    // });
		var urlName = person.firstName + "_" + person.lastName;
		urlName = urlName.toLowerCase();
		$state.go('people.profile', {name: urlName});
    }

    /***** Main *****/
    peopleSvc.getPeople().then(function (data) {
    	$scope.people = data;
    });

	}]);
}());