angular.module('starter.controllers')
  .controller('landingCtrl', function($scope, $rootScope, $state, BoostSvc) {
    $scope.selectMode = function(mode){
      // 0 - WW Member
      // 1 - Booster/Friend
      $rootScope.mode = mode;
      $rootScope.member = {
        id: "member1",
        name: "Jannifer",
        img: "img/jeniffer.png"
      };

      $rootScope.booster = {
        id: "b002",
        name: "Elias Yousef",
        img: "img/elias.png"
      };

      if(mode === 0){
        $rootScope.user = {
          type: "member",
          name: "Jannifer"
        };
        $state.go("tab.dash");
      }
      else{
        $rootScope.user = {
          type: "booster",
          name: "Elias Yousef"
        };
        $state.go("tab.following");
      }
      BoostSvc.sendBoost("some message looks good. how r u?");
       //
    }

  });
