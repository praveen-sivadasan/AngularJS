myApp.controller('LoginCtrl', ['$scope','user', '$http', '$q','UserService','ApplicationConstants','$rootScope','$compile','$window',
    function($scope,user,$http,$q,UserService,ApplicationConstants,$rootScope,$compile,$window) {

        $scope.successMessage = [];
        $scope.errorMessage = [];
        $scope.ApplicationConstants = ApplicationConstants;

        $scope.dirtyList = [];

        $scope.username = null;

        $scope.findUserById = function() {
            if($scope.username != null && $scope.username.trim() != '') {
                UserService.findUserById($scope.username).query(null, function(data) {
                    $scope.successMessage = [];
                 //   LoggedUserService.setUser(data);

                    user.usern = '1212212';
                   // $rootScope.$broadcast('user', data);
                  //  myApp.value("myValue"  , "12345");


                    $window.location.href = './user.html';
                    //redirect
                }, function(error) {
                    $scope.successMessage = [];
                    $scope.errorMessage = [ApplicationConstants.user.notFound];
                    $('html').scrollTop(0);
                });
            }
        };

        $scope.clear = function (){
            $scope.errorMessage = [];
            $scope.successMessage = [];
        };

    }
]);

