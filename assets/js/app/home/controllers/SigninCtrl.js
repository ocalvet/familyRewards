(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('SigninCtrl', ['$state', 'providerService', '$mdDialog', '$window', 'securityService',
      function($state, providerService, $mdDialog, $window, securityService) {

        var signin = this;

        signin.providers = [];

        signin.showOtherProviders = false;

        providerService.getProviders()
          .then(function(providers) {
            console.log("Providers", providers);
            signin.providers = providers;
            signin.showOtherProviders = signin.providers.length > 0;
          }, function(error) {
            console.log(error);
          })

        signin.signinUser = function(user) {
          // Sign user in, if user is sign in redirect to dashboard
          securityService.signinUser(user)
            .then(function() {
              $window.location = "dashboard";
            }, function(error) {
              console.log("There was an error sigin user in");
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
