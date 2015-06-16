(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('MemberViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$stateParams', 'familyService',
            function($scope, $mdToast, pagePropertiesService, $stateParams, familyService) {
                
                pagePropertiesService.pageTitle = "Family - Member";
                
                $scope.pageProperties = pagePropertiesService;

                familyService.getMember($stateParams.memberId)
                    .then(function(member) {
                        console.log("MemberViewCtrl ", member);
                        $scope.member = member;
                    }, function(error) {
                        console.log(error);
                    });
        }]);

})(angular)