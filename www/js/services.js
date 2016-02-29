angular.module('starter.services', ['starter.factories'])

.service('StaticData', function($timeout, $http) {
    var filePath = 'static/'
    return {
        get: function(fileName) {
            return $http.get( filePath + fileName ).then(function(response) {
                return response.data;
            });
        }
    }
});