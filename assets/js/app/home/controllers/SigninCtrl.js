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

      signin.useProvider = function(provider) {
        console.log("Using provider", provider);
        $window.open("auth/" + provider.name);
        //$mdDialog.show({
        //  //controller: DialogController,
        //  //templateUrl: 'dialog1.tmpl.html',
        //  //parent: angular.element(document.body),
        //  //targetEvent: ev,
        //})
        //  .then(function(answer) {
        //    $scope.alert = 'You said the information was "' + answer + '".';
        //  }, function() {
        //    $scope.alert = 'You cancelled the dialog.';
        //  });
      };

      signin.goTo = function(state) {
        $state.go(state);
      }

    }]);

})(angular)
