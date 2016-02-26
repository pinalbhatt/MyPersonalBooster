angular.module('starter.controllers')
  .controller('boostsCtrl', function($scope, $stateParams, $rootScope,BoostSvc) {
    $scope.templates = [
      {name:"boost01",content : "Keep up the amazing work!"},
      {name:"boost02",content : "Stay strong and healthy :)"},
      {name:"boost03",content : "❤️❤️❤️ GREAT JOB!!!❤️❤️❤️"},
      {name:"boost04",content : "See u @ the meetong :)"},
      {name:"boost05",content : "Don’t give in to Temptation!!"},
    ];
    $scope.custom = {};
    $scope.$on('$ionicView.enter', function() {
      $scope.user = $rootScope.member;
      $scope.show = false;
    });


    /*$scope.user = {
     name: "Elias Yousef",
     theme: "do it!",
     avatar: "img/adam.jpg"
     };*/

    $scope.sendBoot = function(message){
      BoostSvc.sendBoost(message);
    }
    $scope.send = function(){
      BoostSvc.sendBoost($scope.custom.boostMsg);
    }
  });
