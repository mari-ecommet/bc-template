customApp.controller("CustomCssController", ['$scope', '$http', 'layoutSettings', function($scope, $http, layoutSettings){
  var self = this;

  $scope.sets = layoutSettings.sets;
  $scope.result = [];


  $scope.formItems = [
    {
      "item" : "principal",
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
      "tipo" : "radio",
      "options" : [
        {"valor" : "block",
        "label": "Sim"},
        {"valor" : "none",
        "label": "Não"}
      ],
      "label" : "Mostra Sidebar"
    },
    {
      "atributo" : "width",
      "item" : "product",
      "chave" : "colProduto",
      "valor" : "33%",
      "tipo" : "coluna",
      "label" : "Número de Colunas de Produtos"
    },
  ]

  $scope.submit = function(){
    console.log($scope.result)
    // $scope.result.forEach(function(val, key){
    //   var atributos = val.atributo;
    //   if(atributos.constructor === Array){
    //     atributos.forEach(function(a, i){
    //       console.log("." + val.item + "{" + a + " : " + val.valor + ";}")
    //     })
    //   }else{
    //     console.log("." + val.item + "{" + val.atributo + " : " + val.valor + ";}")
    //   }
    // })


  }

}])
