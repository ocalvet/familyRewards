(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('RegisterCtrl', ['$state', 'registrationService', '$window', function($state, registrationService, $window) {

      var register = this;

      register.availableRoles = ["parent", "child"];

      register.userInfo = {
        role: 'parent'
      };

      register.completeRegistration = function(userInfo) {
        registrationService.registerUser(userInfo)
          .then(function(user) {
            $window.location = "/dashboard";
          })
      }

    }]);

})(angular)
