(function() {
	// NEW CODE
	var app = angular.module('store', [ 'product' ]);
	// END NEW CODE

	app.controller('StoreController', ['$http', function($http) {
		var self = this;

		$http.get('http://www.jlg-consulting.com/orsys/FAN/exercises/data.php')
			.success(function(data) {
				self.products = data;
			});

		this.buy = function(product) {
			product.quantity -= 1;
		};
	}]);
})();