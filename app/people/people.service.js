(function () {
	"use strict";
	var app = angular.module('think');

	app.factory('peopleSvc', ['$http', function peopleSvc($http) {

		var people = undefined;
 
	    var getPeople = function() {
    		return $http({
	            method: "get",
	            url: "docs/profile.json",
	        }).then(function(response) {
	        	people = response.data;
	        	return response.data;
	        });
	    }

	    return {
	    	getPeople: getPeople
	    };

    }]);
}());