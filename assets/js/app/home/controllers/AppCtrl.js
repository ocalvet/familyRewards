(function(ng) {

    'use strict';

    ng.module('homeApp')
        .controller('AppCtrl', ['$state', function($state) {

          var app = this;

          app.goTo = function(state) {
            $state.go(state);
          };

        }]);

})(angular)
