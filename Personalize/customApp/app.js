var customApp = angular.module("CustomApp", [])

.factory("WebFonts", [ '$http', function($http){
  var url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBgI0Bu2KA1kU23m77UpCa1f8LMdAkp3nE";
  var service = {
    getFonts : function(){
      $http.get(url).then(function(data){
        // trazer primeiras fontes
        //fazer um search
        console.log(data.data)
      })
    }
  };
  return service;
}])
.factory("FormService", ['$http', function($http){
  var url = "../Site/tema/teste/form.json";
  var service = {
    getFormFields : function(){
      $http.get(url).then(function(data){

        for (key in data.data) {
          console.log(key)
        }
        console.log(JSON.parse(data.data))
      });
    }
  }
  return service;
}])
.controller("MainController", ['$scope', 'WebFonts', 'FormService' ,function($scope, webFontes, formService){
  //promise required
  $scope.fields = formService.getFormFields();

}])

customApp.directive("formField", function(){
  return{
    restrict : "E",
    templateUrl: "directives/formField.html",
    link: function(){

    }
  }
})


customApp.directive("radioField", function(){
  return{
    restrict: "E"
  }
})
