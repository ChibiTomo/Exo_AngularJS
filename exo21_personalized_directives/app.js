(function() {
	var app = angular.module('store', []);

	// NEW CODE
	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'product_gallery.html'
		};
	});
	app.directive('productSpec', function(){
		return {
			restrict: 'E',
			templateUrl: 'product_spec.html'
		};
	});
	app.directive('productComments', function(){
		return {
			restrict: 'E',
			templateUrl: 'product_comments.html'
		};
	});
	app.directive('commentForm', function(){
		return {
			restrict: 'E',
			templateUrl: 'comment_form.html'
		};
	});
	app.directive('stars', function(){
		return {
			restrict: 'E',
			templateUrl: 'stars.html'
		};
	});
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

	app.controller('GalleryController', function() {
		this.current = 0;

		this.setCurrent = function(index) {
			this.current = index || 0;
		};
	});

	app.controller('AddCommentController', function() {
		this.comment = {};

		this.addComment = function(product) {
			product.comments.push(this.comment);
			this.comment = {};
		};
	});

	app.controller('StarController', function() {
		this.getRange = function(nbr) {
			nbr = nbr || 0;
			return new Array(nbr);
		};
	});
})();