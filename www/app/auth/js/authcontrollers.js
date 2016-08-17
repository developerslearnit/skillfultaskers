angular.module('taskers')
.controller('landingCtrl', ['$scope','$ionicModal',function($scope,$ionicModal){

    $scope.isLogin;
    
    $scope.title = "Sign up";
    $ionicModal.fromTemplateUrl('app/auth/auth-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
  
  $scope.showModal = function(authtype) {
    $scope.isLogin = authtype;
    if(authtype){
      $scope.title="Sign in";
    }
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.signIn =function(data){
    console.log('data',data);
  };

  $scope.signUp =function(data){
    console.log('data',data);
  };
}])