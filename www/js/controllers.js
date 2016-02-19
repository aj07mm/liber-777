angular.module('starter.controllers', ['starter.factories'])
.controller('DashCtrl', function($scope, Data) {
  $scope.explore = function(event){
    var sephiraId = event.target.id.split('-')[1];
    Data.currentSephiraId = sephiraId;
  }

})

.controller('ChatsCtrl', function($scope, Chats, Data) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.iddda = Data;
  $scope.remove = function(chat) {
    console.log(Data.currentSephiraId)
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

