(function(ng) {

    'use strict';

    ng.module('homeApp', ['ngMaterial', 'ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/home");

          $stateProvider
            .state("home", {
              url: "/home",
              controller: "HomeCtrl as home",
              templateUrl: "partials/home/home.html"
            })
            .state("signin", {
              url: "/signin",
              controller: "SigninCtrl as signin",
              templateUrl: "partials/home/signin.html"
            })
            .state("register", {
              url: "/register",
              controller: "RegisterCtrl as register",
              templateUrl: "partials/home/register.html"
            });
        }])
        .config(function($mdThemingProvider) {
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
        });

})(angular)
