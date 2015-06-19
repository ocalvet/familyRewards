(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .factory('goalsService', function($q, $http) {

            var userGoals = function(userId) {
                var defer = $q.defer();
                // TODO Replace to use an api instead
                defer.resolve([
                {
                    id: 1,
                    goal: "Throw trash out",
                    description: "The trash should be thrown out everyday" 
                },
                {
                    id: 2,
                    goal: "Do the dishes",
                    description: "After dinner all the dishes should be done" 
                },
                {
                    id: 3,
                    goal: "Make the bed",
                    description: "Every morning the bed should be fixed defore leaving the house" 
                }]);

                return defer.promise;
            }

            return {
                getUserGoals: userGoals
            }
        });

})(angular)