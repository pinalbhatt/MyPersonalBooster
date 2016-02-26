angular.module('starter.controllers')
  .controller('boostsCtrl', function($scope, $stateParams, $rootScope,BoostSvc) {
    $scope.templates = [
      {name:"boost01",content : "Keep Going!",color:"#00A0DB"},
      {name:"boost02",content : "Keep up the amazing work!",color:"#F48C37"},
      {name:"boost03",content : "Stay strong and healthy :)",color:"#F19394"},
      {name:"boost04",content : "❤️❤️❤️ GREAT JOB!!! ❤️❤️❤️",color:"#FFF03A"},
      {name:"boost05",content : "See u @ the meeting :)",color:"#F33333"},
      {name:"boost06",content : "Don’t give in to Temptation!!",color:"#2DC127"},
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
