(function(ng) {
  'use strict';
  ng.module('homeApp')
    .controller('ProviderDialogCtrl', ['$mdDialog', 'provider', 'providerService', function($mdDialog, provider, providerService) {
      var providerDialog = this;

      providerDialog.providerUrl = "auth/" + provider.slug;
      //providerService.getProviderPortal(provider)
      //  .then(function(content) {
      //    providerDialog.content = content;
      //  }, function(error) {
      //    console.log(error);
      //  });

      providerDialog.hide = function() {
        $mdDialog.hide();
      };

    }]);
})(angular);
