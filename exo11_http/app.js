(function() {
	var app = angular.module('store', []);

	// NEW CODE
	app.controller('StoreController', ['$http', function($http) {
		var self = this;

		self.products = [];

		$http.get('http://www.jlg-consulting.com/orsys/FAN/exercises/data.php')
			.success(function(data) {
				self.products = data;
			})
			.error(function() {
				alert('Cannot get the products.');
			});
	// END NEW CODE

		this.buy = function(product) {
			product.quantity -= 1;
		};
	}]);

	app.controller('GalleryController', function() {
		this.current = 0;

		this.setCurrent = function(index) {
			this.current = index || 0;
		};
	});
})();