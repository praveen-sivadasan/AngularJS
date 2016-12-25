var myApp = angular.module('loginModule', ['ngResource','ConstantServiceProvider']).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/login', {
            templateUrl: 'partials/userLogin.html',
            controller: 'LoginCtrl'
        }).
        when('/error', {
            templateUrl: 'error.html'
        }).
        otherwise({
            redirectTo: '/login'
        });
    }
]);


myApp.factory("user", [function(){
    var user = {
        usern: '',
        passw: ''
    };
    return user;
}]);