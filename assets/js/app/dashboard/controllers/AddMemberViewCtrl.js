(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AddMemberViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$state', 'familyService', '$location',
            function($scope, $mdToast, pagePropertiesService, $state, familyService, $location) {
            
                pagePropertiesService.pageTitle = "Family - Member - Add";
                
                $scope.pageProperties = pagePropertiesService;
                
            }]);

})(angular)