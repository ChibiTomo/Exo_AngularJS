(function() {
	var app = angular.module('store-product', []);

	app.directive('productGallery', function(){
		return {
			restrict: 'E',
			templateUrl: 'product_gallery.html',
			controller: function() {
				this.current = 0;

				this.setCurrent = function(index) {
					this.current = index || 0;
				};
			},
			controllerAs: 'gallery'
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
			templateUrl: 'comment_form.html',
			controller: function() {
				this.comment = {};

				this.addComment = function(product) {
					product.comments.push(this.comment);
					this.comment = {};
				};
			},
			controllerAs: 'formCtrl'
		};
	});
})();