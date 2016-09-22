WebstoreApp.directive("banner", function(){
  return{
    restrict: "E",
    scope: {banners : "=banners", sets : "=sets"},
    templateUrl: 'tema/directives/banner.html'

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

WebstoreApp.directive("vitrinePrincipal", function(){
  return{
    restrict: "E",
    templateUrl: 'tema/directives/vitrinePrincipal.html'
  }
})

WebstoreApp.directive("product", function(){
  return{
    restrict: "E",
    templateUrl: 'tema/directives/product.html'
  }
})
