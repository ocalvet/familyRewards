(function(ng) {
	
	'use strict';
	
	ng.module('homeApp')
	.factory('notificationService', ['$mdToast', function($mdToast) {
		
		var showInfo = function(infoText) {
		
			$mdToast.show(
		      $mdToast.simple()
		        .content(infoText)
		        .position('bottom right')
		        .hideDelay(3000)
		    );
			
		},
		
		showError = function(error) {
			
			$mdToast.show(
		      $mdToast.simple()
		        .content(error)
		        .position('bottom right')
		        .hideDelay(3000)
		    );
			
		};
		
		return {
			showInfo: showInfo,
			showError: showError
		}
	}])
	
})(angular);