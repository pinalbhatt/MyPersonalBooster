angular.module('starter.controllers')
  .controller('inboxCtrl', function($scope, BoostSvc, $rootScope) {
    $rootScope.isNew = false;
    $scope.$on('$ionicView.enter', function() {
      init();
    });
    function  init() {
      $scope.$on('$ionicView.enter', function() {
        $scope.boosts = BoostSvc.getBoosts();
        $scope.boosts.reverse();
      });

     /* $scope.boosts = [
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "some message looks good. how r u?",
          "timestamp": 1456456268089
        },

        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "See u @ the meetong :)",
          "timestamp": 1456456409889
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "custom message",
          "timestamp": 1456456618379
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "Don’t give in to Temptation!!",
          "timestamp": 1456456756681
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "Don’t give in to Temptation!!",
          "timestamp": 1456456758301
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "Don’t give in to Temptation!!",
          "timestamp": 1456456759102
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "dfasdfsdfsdfsd",
          "timestamp": 1456456763320
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "helloooooooo",
          "timestamp": 1456496017583
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "Stay strong and healthy :)",
          "timestamp": 1456496602045
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "Stay strong and healthy :)",
          "timestamp": 1456496603615
        },
        {
          "from": {
            "avatar": "img/elias.png",
            "id": "b002",
            "name": "Elias Yousef",
            "theme": "always dynamic"
          },
          "message": "Elias",
          "timestamp": 1456496633618
        }
      ];
      console.log($scope.boosts);*/
    }
  })
