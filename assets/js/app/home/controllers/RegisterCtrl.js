(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('RegisterCtrl', ['$state', 'registrationService', '$window', 'notificationService', 
      function($state, registrationService, $window, notificationService) {
  
        var register = this;
  
        register.availableRoles = ["parent", "child"];
  
        register.userInfo = {
          role: 'parent'
        };
  
        register.completeRegistration = function(userInfo) {
          registrationService.registerUser(userInfo)
            .then(function(user) {
              $window.location = "/dashboard";
            }, function(error) {
              notificationService.showError(error);
            })
        }
  
      }]);

})(angular)
