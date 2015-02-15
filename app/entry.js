require('angular');
require('angular-route');


angular
    .module('demo', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hello', {
            controller: function() {
                console.log('demo');
            },
            templateUrl: './app/hello/hello.html'
        });
    }]);