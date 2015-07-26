(function(ng) {

  'use script';

  ng.module('homeApp')
    .factory('providerService', ['$q', '$http', function($q, $http){

      var getProviders = function() {
        var defer = $q.defer();

        $http.get('/auth/providers')
          .success(function(providers) {
            defer.resolve(providers);
          })
          .error(function(response) {
            defer.reject(response);
          })

        return defer.promise;
      }

      return {
        getProviders: getProviders
      };
    }]);

})(angular)
