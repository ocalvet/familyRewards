(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('SigninCtrl', ['$state', 'providerService', '$mdDialog', '$window', function($state, providerService, $mdDialog, $window) {

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
        console.log("user information", user);
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
