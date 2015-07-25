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
        registrationService.registerUser(userInfo)
          .then(function(user) {
            console.log("user after registration", user);
          })
      }

    }]);

})(angular)
