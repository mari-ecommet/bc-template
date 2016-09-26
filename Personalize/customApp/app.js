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
.factory("FormService", ['$http', "$q", function($http, $q){
  var url = "../Site/tema/teste/form.json";
  var service = {
    getFormFields : function(){
      var deferred = $q.defer();
      $http.get(url).then(function(result){
        deferred.resolve(result.data);
      },function (data, status, headers, config) {
        deferred.reject(undefined);
      });
      return deferred.promise;
    }
  }

  return service;
}])
.controller("MainController", ['$scope', 'WebFonts', 'FormService' ,function($scope, webFontes, formService){
  formService.getFormFields().then(function(valor){
    $scope.fields = valor;
    console.log(valor)
  });
  $scope.result =[]
  $scope.submit = function(){
    var url = "" // url do serviço de salvar as alterações
    console.log($scope.result)
  }

}])

customApp.directive("formfield", function(){
  return{
    restrict : "E",
    scope: true,
    templateUrl: "customApp/directives/formField.html"
  }
})
