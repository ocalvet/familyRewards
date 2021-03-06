(function(ng) {

    'use strict';

    ng.module('dashboardApp', ['ngMaterial', 'ui.router'])
        .config(function($mdThemingProvider, $urlRouterProvider, $stateProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '800',
                'hue-1': '50',
                'hue-2': '400',
                'hue-3': '700'
            })
            .warnPalette('deep-orange', {
                'default': '300',
                'hue-1': '50',
                'hue-2': '500',
                'hue-3': '800'
            })
            .accentPalette('teal', {
                'default': '100',
                'hue-1': '50',
                'hue-2': '500',
                'hue-3': '900'
            });

            $urlRouterProvider.otherwise("/family");
              //
              // Now set up the states
            $stateProvider
                // Members routes
                .state('family', {
                  url: "/family",
                  controller: "FamilyViewCtrl",
                  templateUrl: "partials/dashboard/family.html"
                })
                .state('addMember', {
                  url: "/family/member/add",
                  controller: "AddMemberViewCtrl",
                  templateUrl: "partials/dashboard/add_member.html"
                })
                .state('member', {
                  url: "/family/member/{memberId}",
                  controller: "MemberViewCtrl",
                  params: { member: null },
                  templateUrl: "partials/dashboard/member.html"
                })
                // Settings routes
                .state('settings', {
                  url: "/settings",
                  controller: "SettingsViewCtrl",
                  templateUrl: "partials/dashboard/settings.html"
                })
                // About routes
                .state('about', {
                  url: "/about",
                  controller: "AboutViewCtrl",
                  templateUrl: "partials/dashboard/about.html"
                });
        });

})(angular)
