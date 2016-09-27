(function () {
	"use strict";
	var app = angular.module('think');

	app.provider('modalState', function($stateProvider) {
      console.log('Modal State Provider Loaded');
      var provider = this;
      this.$get = function() {
          return provider;
      }
      this.state = function(stateName, options) {
          var modalInstance;
          $stateProvider.state(stateName, {
              url: options.url,
              onEnter: function($uibModal, $state) {
                  modalInstance = $uibModal.open(options);
                  modalInstance.result.then(
                    function () {

                    },
                    function() {
                      $state.go('^');

                    })
                  ['finally'](function() {
                      modalInstance = null;
                      // if ($state.$current.name === stateName) {
                      //     $state.go('^');
                      // }
                  });
              },
              onExit: function() {
                  if (modalInstance) {
                      modalInstance.close();
                  }
              }
          });
      };
  });

}());