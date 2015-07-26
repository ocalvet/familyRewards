(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('SigninCtrl', ['$state', 'providerService', function($state, providerService) {

      var signin = this;

      signin.providers = [];

      providerService.getProviders()
        .then(function(providers) {
          signin.providers = providers;
        }, function(error) {
          console.log(error);
        })

      signin.signinUser = function(user) {
        console.log("user information", user);
      };

      signin.goTo = function(state) {
        $state.go(state);
      }

    }]);

})(angular)
