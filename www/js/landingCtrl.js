angular.module('starter.controllers')
  .controller('landingCtrl', function($scope, $rootScope, $state) {
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
      $state.go("tab.dash");
    }

  })
