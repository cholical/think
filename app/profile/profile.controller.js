(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('profileCtrl', ['$scope', '$stateParams', '$uibModalInstance', 'peopleSvc', function profileCtrl($scope, $stateParams, $uibModalInstance, peopleSvc){
    
		$scope.close = function () {
			$uibModalInstance.dismiss();
		}

	    /***** Main *****/

	    var nameArray = $stateParams.name.toString().split("_");
	    peopleSvc.getPeople().then(function (data) {
	    	$scope.person = _.find(data, function (person) {
	    		return person.firstName.toLowerCase() == nameArray[0] && person.lastName.toLowerCase() == nameArray[1];
	    	});
	    });

	}]);
}());