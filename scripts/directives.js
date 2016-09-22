customApp.directive("component", [function(){
return{
    restrict: 'E',
    scope: false,
    templateUrl: "inputType.html"
  }
}])
.directive("teste", function(){
  return{
    restict: "A",
    link: function(scope, element, attrs){
      scope.$watch(attrs.ngModel, function (v) {
          console.log('value changed, new value is: ' + v);
      });
    }
  }
})


.directive("vitrine1", function(){
  return{
    restrict: "E",

  }
})
