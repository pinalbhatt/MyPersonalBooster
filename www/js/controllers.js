angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, $state) {

  $scope.$on('$ionicView.enter', function() {
    init();
  });

  function init() {
    if ($rootScope.mode === 0 || $rootScope.mode === 1) {
      $scope.currentUser = $rootScope.user;
    }
    else {
      $state.go('welcome');
    }
  }


})


  .controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
  .controller('inboxCtrl', function($scope) {

    $scope.boosts = [
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"some message looks good. how r u?",
          "timestamp":1456456268089
        },

        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"See u @ the meetong :)",
          "timestamp":1456456409889
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"custom message",
          "timestamp":1456456618379
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"Don’t give in to Temptation!!",
          "timestamp":1456456756681
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"Don’t give in to Temptation!!",
          "timestamp":1456456758301
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"Don’t give in to Temptation!!",
          "timestamp":1456456759102
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"dfasdfsdfsdfsd",
          "timestamp":1456456763320
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"helloooooooo",
          "timestamp":1456496017583
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"Stay strong and healthy :)",
          "timestamp":1456496602045
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"Stay strong and healthy :)",
          "timestamp":1456496603615
        },
        {
          "from":{
            "avatar":"img/elias.png",
            "id":"b002",
            "name":"Elias Yousef",
            "theme":"always dynamic"
          },
          "message":"Elias",
          "timestamp":1456496633618
        }
      ];
    console.log($scope.boosts)
  })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
