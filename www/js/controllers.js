angular.module('starter.controllers', ['starter.factories'])
.controller('DashCtrl', function($scope, $state, $ionicLoading, Data, StaticData) {
  if($scope.liber777 == undefined){
    $ionicLoading.show({
      template: 'Loading...',
      duration: 5000
    });
    StaticData.get('liber777json/liber777.json').then(function(data) {
      Data.setLiber777(data);
      //set index
      $scope.items = [];
      for(key in Data.getKeyScale()){
          $scope.items.push({
            'key' : Data.getKeyScale()[key],
            'value' : Data.liber777["II.*"][key]
          });
      }
    });
  }
  $scope.explore = function(item){
    var sephiraId = item.key;
    Data.setCurrentSephiraId(sephiraId);
    $state.go("tab.chats");
  };


})

.controller('ChatsCtrl', function($scope, $ionicLoading, Data, StaticData) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.Data = Data;
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

