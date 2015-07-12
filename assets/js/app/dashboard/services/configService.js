(function(ng) {

  'use strict';

  ng.module('dashboardApp')
    .service('configService', ['$location', function($location) {

      var urls = {
        getFamily: "family/getUserFamily"
      }

      return {
        urls: urls
      };
    }]);

})(angular)
