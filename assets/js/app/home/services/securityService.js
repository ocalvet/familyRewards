(function(ng) {

  'use strict';

  ng.module('homeApp')
    .factory('securityService', ['$q', '$http', function($q, $http) {

      var signinUser = function(user) {
        var defer = $q.defer();

        $http.post("auth/local", user)
          .success(function(response) {
            if (response.success) {
              defer.resolve();
            } else {
              defer.reject("Wrong user name or password");
            }
          })
          .error(function(response) {
            defer.reject("There was an error authenticating, please contact administrator");
          })

        return defer.promise;
      }

      return {
        signinUser: signinUser
      }
    }]);

})(angular);
