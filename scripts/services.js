customApp.factory("layoutSettings", ['$http',function($http){
  var self = this;

  self.sets =   {
  	"vitrine1": {
  		"display": true,
  		"modal": "modal1",
  		"itemsFull": 4,
  		"itemsMobile": 1,
  		"itemsMid": 2
  	},
  	"sidebar": {
  		"display": true,
  		"tamanho": 2
  	},
  	"fullbanner": {
  		"display": true
  	}
  }
  return self;
}])
