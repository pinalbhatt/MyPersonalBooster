angular.module('starter.controllers')
  .controller('landingCtrl', function($scope, $rootScope, $state, BoostSvc) {
    $scope.selectMode = function(mode){
      // 0 - WW Member
      // 1 - Booster/Friend
      $rootScope.mode = mode;
      $rootScope.member = {
        id: "member1",
        name: "Jannifer",
        theme: "really in need of motivation!",
        avatar: "img/jeniffer.png"
      };

      $rootScope.booster = {
        id: "b002",
        name: "Elias Yousef",
        theme: "always dynamic",
        avatar: "img/elias.png"
      };

      if(mode === 0){
        $rootScope.user = $rootScope.member;
        $state.go("tab.dash");
      }
      else{
        $rootScope.user = $rootScope.booster;
        $state.go("tab.following");
      }
      //BoostSvc.sendBoost("some message looks good. how r u?");
       //
    }

  });
