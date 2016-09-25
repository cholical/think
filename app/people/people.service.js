(function () {
	"use strict";
	var app = angular.module('think');

	app.factory('peopleSvc', ['$http', function peopleSvc($http) {
 
	    var getPeople = function() {
	    	return $http({
	            method: "get",
	            url: "docs/profile.json",
	        }).then(function(response) {
	        	return response.data;
	        });
	    }

	    return {
	    	getPeople: getPeople
	    };

    }]);
}());