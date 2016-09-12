WebstoreApp.directive('fullbanner', function(){
  // console.log("new directive")
  // var a;
  //
  // customOptions.forEach(function(val, key){
  //   if (val.model == "full-banner"){
  //     a = val;
  //   }
  // });
  // console.log(a);
  var link = function(){
    
  }
  return{
  restrict: 'E',
  template: '{{customOptions[0]}}',
  }

})
