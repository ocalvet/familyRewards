(function(ng) {

  'use script';

  ng.module('homeApp')
    .factory('providerService', ['$q', '$http', function($q, $http){

      var getProviders = function() {
          var defer = $q.defer();

          $http.get('/auth/providers')
            .success(function(response) {
              defer.resolve(response.providers);
            })
            .error(function(response) {
              defer.reject(response);
            })

          return defer.promise;
        },

        getProviderPortal = function(provider) {
          var defer = $q.defer();

          $http.get('/auth/' + provider.slug)
            .success(function(response) {
              defer.resolve(response);
            })
            .error(function(response) {
              defer.reject("Couldn't get " + provider.name + " portal at this time");
            })

          return defer.promise;
        }

      return {
        getProviders: getProviders,
        getProviderPortal: getProviderPortal
      };
    }]);

})(angular)
