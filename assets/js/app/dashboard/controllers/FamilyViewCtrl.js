(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('FamilyViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$state', 'familyService', '$location',
            function($scope, $mdToast, pagePropertiesService, $state, familyService, $location) {
            
                familyService.getMembers()
                    .then(function(members){ $scope.familyMembers = members; });

                pagePropertiesService.pageTitle = "Family";
                $scope.pageProperties = pagePropertiesService;

                $scope.addMember = function() {
                    $location.path('family/member/add');
                };

                $scope.memberClick = function(member) {
                    $location.path('family/member/' + member.id);
                    console.log("member ", member)
                     // $state.go('member', {memberId: member.id});
                };

                $scope.deleteMember = function($event, member) {
                    familyService.deleteMember(member);
                    $event.stopPropagation();
                }

                $scope.menuItems = [
                    { title: 'remove', icon: 'delete', action: $scope.deleteMember },
                    { title: 'edit', icon: 'mode_edit', action: function($event, member) { 
                            $state.go('deleteMember', { member: member }); 
                            $event.stopPropagation(); 
                        }
                    }
                ];
            }]);

})(angular)