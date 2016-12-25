var myApp = angular.module('userModule', ['ngResource','ui.bootstrap','ConstantServiceProvider','loginModule']).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/user', {
            templateUrl: 'partials/userHome.html',
            controller: 'UserCtrl'
        }).
        when('/error', {
            templateUrl: 'error.html'
        }).
        otherwise({
            redirectTo: '/user'
        });
    }
]);
