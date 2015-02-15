angular.module('Hello', []);

require('./controllers/helloControllers.js');

angular.module('Hello')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/hello', {
            controller: 'helloController',
            templateUrl: './app/hello/statics/hello.html'
        });
    }]);