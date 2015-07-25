(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('SigninCtrl', ['$state', function($state) {

      var signin = this;

      console.log("scope");

      signin.title = "Signin page";

      signin.signinUser = function(user) {
        console.log("user information", user);
      };

      signin.goTo = function(state) {
        $state.go(state);
      }

    }]);

})(angular)
