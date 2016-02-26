angular.module('starter.services', [])

  .factory('BoostSvc', function( $rootScope, $firebaseObject, $firebaseArray){
     return  {
      sendBoost: sendBoost,
       getBoosts: getBoosts,
       sendDemoBoosts: sendDemoBoosts
    };

    function sendBoost(message,fromMember, toMember ){
      if(toMember === undefined){
        toMember = $rootScope.member;
      }
      if(fromMember === undefined){
        fromMember = $rootScope.booster;
      }
      var obj = {
        message: message,
        from: fromMember,
        timestamp: Firebase.ServerValue.TIMESTAMP
      };
      fbRef.child("members").child(toMember.id).child("inbox").push(obj);
    }

    function getBoosts(forMember){
      if(forMember === undefined){
        forMember = $rootScope.member;
      }
      var inboxRef = fbRef.child("members").child(forMember.id).child("inbox");
      var query = inboxRef.orderByChild("timestamp").limitToLast(10);
      return $firebaseArray(query);

    }

    function sendDemoBoosts(){

      var sender, msg;
      sender = {
        name: "Adam Mark",
        id: "000",
        avatar: "img/adam.jpg",
        theme: ""
      };
      msg = "message from Adam";
      sendBoost(msg, sender);

      sender = {
        name: "Mike Ben",
        id: "000",
        avatar: "img/ben.png",
        theme: ""
      };
      msg = "message from Mike";
      sendBoost(msg, sender);

      sender = {
        name: "Operah Winfrey",
        id: "000",
        avatar: "img/operah.png",
        theme: ""
      };
      msg= "test";

      sendBoost(msg, sender);

    }
  })
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
