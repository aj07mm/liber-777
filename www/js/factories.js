angular.module('starter.factories', [])

.factory('Data', function($http, $rootScope){
  return {
  	"liber777" : undefined,
  	"currentSephiraId" : undefined,
    "setLiber777" : function(id){
      this.liber777 = id;
      $rootScope.liber777 = id;
    },
    "unsetLiber777" : function(){
      this.liber777 = undefined;
      $rootScope.liber777 = undefined;
    },
  	"setCurrentSephiraId" : function(id){
  		this.currentSephiraId = id;
      $rootScope.currentSephiraId = id;
  	},
  	"unsetCurrentSephiraId" : function(){
  		this.currentSephiraId = undefined;
      $rootScope.currentSephiraId = undefined;
  	},
    "getKeyScale" : function(){
      return Object.keys(this.liber777["I."]).filter(function(elm){
        if(elm != 'columnName'){
          return elm;
        }
      });
    }
  }
})
