angular.module('starter.controllers', [])



  .controller('followingCtrl', function($scope) {
    $scope.following = [{name: "gerald brun", theme: "do it!", avatar: "img/ben.png"}, {
      name: "Elias Yousef",
      theme: "do it!",
      avatar: "img/adam.jpg"
    }, {name: "Pinal Bhatt", theme: "do it!", avatar: "/img/max.png"}, {
      name: "Yvonne Woods",
      theme: "do it!",
      avatar: "img/mike.png"
    }, {name: "Jason Saber", theme: "do it!", avatar: "img/perry.png"}];
  })
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
