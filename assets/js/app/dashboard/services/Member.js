(function(ng) {
	
	'use strict';
	
	ng.module('dashboardApp')
		.factory('Member', ['$resource', function($resource) {
			
			return $resource('api/members/:id');
			
		}]);
	
})(angular)