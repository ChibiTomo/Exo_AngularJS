(function() {
	//NEW CODE
	var fruit = {
		name: 'Apple',
		price: 0.5,
		description: 'Apples are really good fruits! Did you know that you can eat one different apple per days during one year without eating the same twice?!'
	};
	// END NEW CODE

	var app = angular.module('store', []);

	//NEW CODE
	app.controller('StoreController', function() {
		this.product = fruit;
	});
	// END NEW CODE
})();