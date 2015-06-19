(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AddMemberViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$state', 'familyService', '$location', 'goalsService',
            function($scope, $mdToast, pagePropertiesService, $state, familyService, $location, goalsService) {
                // Initialize a new member
                $scope.member = {
                    name: "",
                    dob: "",
                    goals: []
                };

                $scope.availableGoals = [];

                goalsService.getUserGoals().then(function(goals) {
                    $scope.availableGoals = goals;
                });

                pagePropertiesService.pageTitle = "Family - Member - Add";
                
                $scope.pageProperties = pagePropertiesService;

            }]);

})(angular)