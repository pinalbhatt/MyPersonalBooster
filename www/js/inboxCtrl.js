angular.module('starter.controllers')


  .controller('inboxCtrl', function($scope, BoostSvc) {

    init();
    $scope.$on('$ionicView.enter', function() {
      init();
    });
    function  init() {
      $scope.$on('$ionicView.enter', function () {
        $scope.boosts = BoostSvc.getBoosts();
        $scope.boosts.reverse();
      });
    };

  });
