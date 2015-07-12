(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .factory('familyService', ['$q', '$http', 'configService', function($q, $http, configService){

          var getFamilyMembers = function(userId) {
                var defer = $q.defer();
                
                $http.get(configService.urls.getFamily)
                  .success(function(res) {
                    defer.resolve(res);
                  })
                  .error(function(res) {
                    defer.reject();
                  });

                return defer.promise;
            },

            getFamilyMember = function(id) {
                var defer = $q.defer();
                var member = familyArray.filter(function(m) {
                    return m.id == id;
                });
                if (member) {
                    defer.resolve(member[0]);
                } else {
                    defer.reject("Element with id " + id + " not found");
                }

                return defer.promise;
            },

            addMember = function(member) {
                var defer = $q.defer();
                try {
                    familyArray.push(member);
                    defer.resolve(member);
                } catch (e) {
                    defer.reject("Something went wrong");
                }
                return defer.promise;
            },

            deleteMember = function(member) {
                var defer = $q.defer();
                var memberIndex = familyArray.indexOf(member);
                if (memberIndex > -1) {
                    familyArray.splice(memberIndex, 1);
                    defer.resolve(member);
                } else {
                    defer.reject("Error deleting: " + member.name);
                }
                return defer.promise;
            };

            return {
                getMembers: getFamilyMembers,
                getMember: getFamilyMember,
                deleteMember: deleteMember,
                addMember: addMember
            }
        }]);

})(angular)
