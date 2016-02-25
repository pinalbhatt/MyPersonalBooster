angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    $scope.facebookLogin = function(){
      alert("ff");
    }
    $scope.socialLogin = function(providerName, scope){
      Auth.$authWithOAuthRedirect(providerName, {scope: scope}).then(function(authData) {
      }).catch(function(error) {
        if (error.code === 'TRANSPORT_UNAVAILABLE') {
          Auth.$authWithOAuthPopup(providerName, {scope: scope}).then(function(authData) {
          });
        } else {
          console.log(error);
        }
      });
    }


    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };

    Auth.$onAuth(function(authData) {
      if (authData === null) {
        console.log('Not logged in yet');
      } else {
        var uData = getUserData(authData);
        if(uData){
          fbRef.child("users").child(uData.id).set(uData);
        }
        console.log('Logged in as', authData.uid);
      }
      // This will display the user's name in our view
      $scope.authData = authData;
    });

    function  getUserData(authData){
      var uData;
      if(authData){
        uData = {
          id: authData.uid,
          provider: authData.provider
        };
        uData.displayName = authData[authData.provider].displayName;
        uData.email = authData[authData.provider].email ? authData[authData.provider].email : "";
        uData.profile =  authData[authData.provider].cachedUserProfile;
      }
      return uData;
    }

    $scope.sms = {}
    $scope.sendSMS = function(){
      var smsOb = {
        number: $scope.sms.number,
        name: $scope.sms.recipient
      }
      fbRef.child("testData").child("sendSms").push(smsOb);
    }
  })

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  });
