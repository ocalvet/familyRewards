(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('SigninCtrl', [function() {

      var signin = this;

      signin.title = "Signin page";

      signin.signinUser = function(user) {
        console.log("user information", user);
      };

    }]);

})(angular)
