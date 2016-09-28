(function () {
	"use strict";
	var app = angular.module('think');

	app.factory('formSvc', ['$http', function formSvc($http) {
 
	    var submitFooterContact = function() {
    		return true;
	    }

	    return {
	    	submitFooterContact: submitFooterContact
	    };

    }]);
}());