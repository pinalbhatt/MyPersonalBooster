angular.module('starter.controllers')
  .controller('followingCtrl', function($scope) {
    $scope.following = [
      {name: "Jannifer", theme: "please motivate me!", avatar: "img/jeniffer.png"},

      {name: "gerald brun", theme: "do it!", avatar: "img/ben.png"}, {
      name: "Elias Yousef",
      theme: "do it!",
      avatar: "img/adam.jpg"
    }, {name: "Pinal Bhatt", theme: "do it!", avatar: "/img/max.png"}, {
      name: "Yvonne Woods",
      theme: "do it!",
      avatar: "img/mike.png"
    }, {name: "Jason Saber", theme: "do it!", avatar: "img/perry.png"}];
  });
