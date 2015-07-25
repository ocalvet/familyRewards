(function(ng) {

  'use strict';

  ng.module('homeApp')
    .controller('HomeCtrl', [function() {
      var home = this;
      home.title = "Home page";
    }]);

})(angular)
