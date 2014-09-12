(function() {	
	var app = angular.module('store', []);
	
	app.controller('StoreController', ['$http', function($http) {
		var self = this;
		
		$http.get('http://www.jlg-consulting.com/orsys/IHM/exercises/data.php')
			.success(function(data) {
				self.products = data;
			});		
		
		this.buy = function(product) {
			--product.quantity;
		};
	}]);
	
	app.controller('GalleryController', function() {
		this.current = 0;
		
		this.setCurrent = function(index) {
			this.current = index || 0;
		};
	});
})();