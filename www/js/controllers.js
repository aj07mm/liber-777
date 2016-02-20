angular.module('starter.controllers', ['starter.factories'])
.controller('DashCtrl', function($scope, Data) {
  $scope.explore = function(event){
    var sephiraId = event.target.id.split('-')[1];
    Data.setCurrentSephiraId(sephiraId);
  }

})

.controller('ChatsCtrl', function($scope, $ionicLoading, Chats, Data, StaticData) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  if($scope.liber777 == undefined){
    $ionicLoading.show({
      template: 'Loading...',
      duration: 2000
    });
    StaticData.get('liber777json/liber777.json').then(function(data) {
        $scope.liber777 = data;
    });
  }

  $scope.Data = Data;
  $scope.getColumnData = function(column, sephirahId){
    if(sephirahId){
      return [column[sephirahId]];
    }
    return column;
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

