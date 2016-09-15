WebstoreApp.controller("FormCtrl", [ '$http', function($http){

  $http.get("options-css.json")
  .then(function(result){

  }, function(err){

  });

}]);
WebstoreApp.controller("DirectiveFormCtrl", ["$scope", "$http", function($scope, $http){
  console.log("new controller")
  var self = this;

  $http.get("tema/customize/json/customOptions.json")
  .then(function(result){
    console.log(result)
    result.data.forEach(function(val){
      var classe = ("." + val.item)
      var tag = $(classe);
      if(tag){
        tag.addClass(val.className +"-"+ val.value)
      }
    })
  }, function(err){

  });





}]);
