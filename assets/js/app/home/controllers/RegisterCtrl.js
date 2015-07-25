(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('RegisterCtrl', ['$state', function($state) {
      var register = this;
      register.title = "Register title";
    }]);

})(angular)
