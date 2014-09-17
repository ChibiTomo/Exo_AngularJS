(function() {
	var fruit = {
		name: 'Apple',
		price: 0.5234,
		description: 'Apples are really good fruits! Did you know that you can eat one different apple per days during one year without eating the same twice?!'
	};

	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.product = fruit;
	});
})();