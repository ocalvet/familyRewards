(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AddMemberViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$state', 'familyService', '$location', 'goalsService',
            function($scope, $mdToast, pagePropertiesService, $state, familyService, $location, goalsService) {
                // Initialize a new member
                $scope.member = {
                    picture: '/images/silhouette.png',
                    name: '',
                    email: '',
                    dob: '',
                    dayProgress: 0,
                    weekProgress: 0,
                    monthProgress: 0
                };

                $scope.availableGoals = [];

                goalsService.getUserGoals().then(function(goals) {
                    $scope.availableGoals = goals;
                });

                pagePropertiesService.pageTitle = "Family - Member - Add";
                
                $scope.pageProperties = pagePropertiesService;

                $scope.addMember = function(member) {
                    familyService.addMember(member)
                    .then(function(member) {
                        $state.go("family");
                        console.log("Member added");
                    });
                }
            }]);

})(angular)