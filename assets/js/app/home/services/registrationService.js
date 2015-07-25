(function(ng) {

  'use strict';

  ng.module('homeApp')
    .factory('registrationService', ['$http','$q', function($http, $q) {
      var registerUser = function(user) {
        var defer = $q.defer();

        $http.post("/auth/local/register", user)
          .success(function(response) {
            defer.resolve(response);
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
