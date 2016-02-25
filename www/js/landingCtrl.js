angular.module('starter.controllers')
  .controller('landingCtrl', function($scope, $rootScope, $state, BoostSvc) {
    $scope.selectMode = function(mode){
      // 0 - WW Member
      // 1 - Booster/Friend
      $rootScope.mode = mode;
      if(mode === 0){
        $rootScope.user = {
          type: "member",
          name: "Jannifer"
        };
      }
      else{
        $rootScope.user = {
          type: "booster",
          name: "Json Saber"
        };
      }
      BoostSvc.sendBoost("member1", $rootScope.user, "some message looks good. how r u?")
      $state.go("tab.dash");
    }

  })
