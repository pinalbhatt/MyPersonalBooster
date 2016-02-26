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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

  .controller('boostsCtrl', function($scope, $stateParams, Chats) {
    $scope.templates = [
      {name:"boost01",content : "Keep up the amazing work!"},
      {name:"boost02",content : "Stay strong and healthy :)"},
      {name:"boost03",content : "❤️❤️❤️ GREAT JOB!!!❤️❤️❤️"},
      {name:"boost04",content : "See u @ the meetong :)"},
      {name:"boost05",content : "Don’t give in to Temptation!!"},
    ];
    $scope.user = {
      name: "Elias Yousef",
      theme: "do it!",
      avatar: "img/adam.jpg"
    };
    $scope.show = false;
    $scope.send = function(){
      //send the $scope.templateText which is the custom
    }
  })

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
