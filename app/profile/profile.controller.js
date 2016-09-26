(function () {

	'use strict';
	var app;

	app = angular.module('think');
	app.controller('profileCtrl', ['$scope', '$uibModalInstance', 'peopleSvc', 'person', function profileCtrl($scope, $uibModalInstance, peopleSvc, person){
    
		$scope.close = function () {
			$uibModalInstance.dismiss();
		}

	    /***** Main *****/
	    $scope.slides = [{"image":"//unsplash.it/601/300","text":"Nice image","id":0},{"image":"//unsplash.it/602/300","text":"Awesome photograph","id":1},{"image":"//unsplash.it/603/300","text":"That is so cool","id":2},{"image":"//unsplash.it/604/300","text":"I love that","id":3}];

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