var constantServiceProvider = angular.module('ConstantServiceProvider', []);
constantServiceProvider.factory('ApplicationConstants', ['$resource',
    function($resource) {

        var webAPI = {};
        webAPI.server = {};
        webAPI.server.error = 'Please try again after sometime.';

        webAPI.user = {};
        webAPI.user.notFound = 'User not found.';

        return webAPI;
    }
]);
