WebstoreApp.controller("FormCtrl", [ '$http', function($http){

  $http.get("options-css.json")
  .then(function(result){

  }, function(err){

  });

}]);
WebstoreApp.controller("DirectiveFormCtrl", ["$scope", function($scope){
  console.log("new controller")
  var self = this;
  self.customOptions =[
  {
    "item" : "full-banner",
    "value": "true",
    "model": "full-banner_show",
  }];
  self.customOptions.forEach(function(val){
    var tag = document.getElementById(val.item);
    if(val.type == "show")
  })


}]);
