(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .factory('familyService', ['$q', function($q){
            var familyArray = [{
                    id: 1,
                    picture: '/images/silhouette.png',
                    name: 'Jonathan',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    id: 2,
                    picture: '/images/silhouette.png',
                    name: 'Ovi',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    id: 3,
                    picture: '/images/silhouette.png',
                    name: 'Ernesto',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    id: 4,
                    picture: '/images/silhouette.png',
                    name: 'Ernestico',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    id: 5,
                    picture: '/images/silhouette.png',
                    name: 'Nora',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                }],

            getFamilyMembers = function(userId) {
                var defer = $q.defer();

                defer.resolve(familyArray);

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
            }

            return {
                getMembers: getFamilyMembers,
                getMember: getFamilyMember
            }
        }])

})(angular)