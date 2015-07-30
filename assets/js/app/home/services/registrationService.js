(function(ng) {

  'use strict';

  ng.module('homeApp')
    .factory('registrationService', ['$http','$q', function($http, $q) {
      var registerUser = function(user) {
        var defer = $q.defer();

        $http.post("/auth/local/register", user)
          .success(function(response) {
            if(response.success) {
              defer.resolve(response.user);
            } else {
              defer.reject("Registration could not be completed")
            }
          })
          .error(function(response) {
            defer.reject("User couldn't register");
          });

        return defer.promise;
      };
      return {
        registerUser: registerUser
      };
    }]);

})(angular)
