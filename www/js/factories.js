angular.module('starter.factories', [])

.factory('Data', function($http){
  return {
  	currentSephiraId : undefined,
  	setCurrentSephiraId : function(id){
  		this.currentSephiraId = id;
  	},
  	unsetCurrentSephiraId : function(){
  		this.currentSephiraId = undefined;
  	}
  }
})
