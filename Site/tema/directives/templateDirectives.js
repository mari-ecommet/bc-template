WebstoreApp.directive("fullbanner", function(){
  return{
    restrict: "E",
    templateUrl: 'tema/directives/fullbanner.html'

  }
})
WebstoreApp.directive("carouseldemarcas", function(){
  return{
    restrict: "E",
    templateUrl: 'tema/directives/carouseldemarcas.html'

  }
})
WebstoreApp.directive("vitrine", function(){
  return{
    restrict: "E",
    scope: {modelo : "=modelo", sets: "=sets"},
    templateUrl: 'tema/directives/vitrine.html'
  }
})
