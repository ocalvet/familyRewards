(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .factory('familyService', ['$q', function($q){
//            var familyArray = [{
//                    id: 1,
//                    picture: '/images/silhouette.png',
//                    name: 'Jonathan Calvet',
//                    goals: [{goal: "Buy a PS4"}, {goal: "Buy a tablet"}],
//                    tasks: [{task: "Take out the trash 3 X week"}, {task: "Make bed every day"}, {task: "Pick up the table before getting up"}],
//                    dayProgress: 30,
//                    weekProgress: 50,
//                    monthProgress: 78
//                },{
//                    id: 2,
//                    picture: '/images/silhouette.png',
//                    name: 'Ovi Calvet',
//                    goals: [{goal: "Buy a Nintendo DSI"}],
//                    tasks: [{task: "Take out the trash 3 X week"}, {task: "Make bed every day"}, {task: "Pick up the table before getting up"}, {task: "Feed patty"}],
//                    dayProgress: 30,
//                    weekProgress: 50,
//                    monthProgress: 78
//                }],

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
