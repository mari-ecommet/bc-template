var customApp = angular.module("CustomApp", []);


customApp.controller("CustomCssController", ['$http', function($http){
  var self = this;

  self.result = [];

  self.formItems = [
    {
      "atributo" : ["color", "background-color"],
      "chave" : "corPrincipal",
      "valor" : "#ff0000",
      "label" : "Cor Principal",
    },
    {
      "item" : "titulo",
      "atributo" : "color",
      "chave" : "corTitulo",
      "valor" : "#ff0000",
      "label" : "Cor do Título"
    },
    {
      "item" : "titulo",
      "atributo" : "font-size",
      "chave" : "sizeTitulo",
      "valor" : "20px",
      "label" : "Tamanho da fonte do Título"
    },
    {
      "atributo" : "display",
      "item" : "sidebar",
      "chave" : "displaySidebar",
      "valor" : "block",
      "label" : "Mostra Sidebar"
    },
    {
      "atributo" : "width",
      "item" : "product",
      "chave" : "colProduto",
      "valor" : "33%",
      "label" : "Número de Colunas de Produtos"
    },
  ]

  self.submit = function(){
    console.log(self.result);


    self.result.forEach(function(val, key){

      var atributos = val.atributo;
      if(atributos.constructor === Array){
        atributos.forEach(function(a, i){
          console.log("." + val.chave +"_"+ a + "{" + a + " : " + val.valor + ";}")
        })
      }else{
        console.log("." + val.item + "{" + val.atributo + " : " + val.valor + ";}")
      }
    })


  }

}])
.directive("component", function(){
return{
    restrict: 'E',
    replace:true,
    transclude:false,
    scope: {
      type: '@?type'
    },
    templateUrl: 'inputType.html'
  }
});
