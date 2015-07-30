(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('SigninCtrl', ['$state', 'providerService', '$mdDialog', '$window', 'securityService', 'notificationService',
      function($state, providerService, $mdDialog, $window, securityService, notificationService) {

        var signin = this;

        signin.providers = [];

        signin.showOtherProviders = false;

        providerService.getProviders()
          .then(function(providers) {
            signin.providers = providers;
            signin.showOtherProviders = signin.providers.length > 0;
          }, function(error) {
            notificationService.showError(error);
          })

        signin.signinUser = function(user) {
          // Sign user in, if user is sign in redirect to dashboard
          securityService.signinUser(user)
            .then(function() {
              $window.location = "dashboard";
            }, function(error) {
              notificationService.showError(error);
            });
        };

        signin.useProvider = function(ev, provider) {
          console.log("Using provider", provider);
          $window.open("auth/" + provider.slug, "__blank");
        };

        signin.goTo = function(state) {
          $state.go(state);
        }

      }]);

})(angular)
