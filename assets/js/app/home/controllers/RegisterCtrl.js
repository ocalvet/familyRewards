(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('RegisterCtrl', ['$state', 'registrationService', function($state, registrationService) {

      var register = this;

      register.availableRoles = ["parent", "child"];

      register.userInfo = {
        role: 'parent'
      };

      register.completeRegistration = function(userInfo) {
        console.log("user info", userInfo);
      }

    }]);

})(angular)
