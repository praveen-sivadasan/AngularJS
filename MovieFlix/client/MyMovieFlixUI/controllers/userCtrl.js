myApp.controller('UserCtrl', ['$scope','user','$http','$modal', '$q','UserService','ApplicationConstants','$compile','$window',
    function($scope,user,$http,$modal,$q,UserService,ApplicationConstants,$compile,$window) {
        $scope.successMessage = [];
        $scope.errorMessage = [];
        $scope.ApplicationConstants = ApplicationConstants;
        $scope.userList = [];
        $scope.loggedUser = {};

        $scope.update = false;

        $scope.clear = function (){
            $scope.errorMessage = [];
            $scope.successMessage = [];
        };

        $scope.autheticatePage = function(){
            if(LoggedUserService.getUser() == null || LoggedUserService.getUser().id == null){
               // $window.location.href = './login.html';
            }else{
                $scope.loggedUser = LoggedUserService.getUser();
            }
        };
      //  $scope.autheticatePage();


        $scope.fetchUsers = function(){
            UserService.findUsers().query(null, function(data) {
               $scope.userList = data;
            }, function(error) {
                $scope.successMessage = [];
                $scope.errorMessage = [ApplicationConstants.server.error];
                $('html').scrollTop(0);
            });
        };
        $scope.fetchUsers();

        $scope.deleteUser = function(userId){
            UserService.findUsers(userId).query(null, function(data) {

            }, function(error) {
                $scope.successMessage = [];
                $scope.errorMessage = [ApplicationConstants.server.error];
                $('html').scrollTop(0);
            });
        };





        $scope.openPopUp = function(){
            $scope.update = true;
            var postBody = {
                popUpNumber : 1
            };

            var modalInstance = $modal.open({
                templateUrl: 'userModal',
                controller: ModalInstanceCtrl,
                resolve: {
                    postBody: function () {
                        return postBody;
                    }
                }
            });

            modalInstance.result.then(function (afterActionObject) {
                if( $scope.popUpNumber == 1 ){
                    $scope.searchObject = afterActionObject.searchObject;
                }
            }, function () {
                $scope.searchObject.currentObject = null;
                $scope.searchObject.currentObjectString = null;
                $scope.isLoading = false;
                $scope.searchObject.eventResult = [];
                $scope.searchObject.contactResults = [];
                $scope.searchObject.selectedIdList = [];
                $('html').scrollTop(0);
            });
        };

        var ModalInstanceCtrl = function ($scope, $modalInstance, postBody) {

            $scope.closePopUp = function () {
                var afterActionObject = {
                   // codeLabel : $scope.codeLabel,
                   // searchObject : $scope.searchObject
                };
                $modalInstance.close(afterActionObject);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        };
        
        
    }
]);

