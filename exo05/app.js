(function() {
	var fruits = [
		{
			name: 'Apple',
			price: 0.5,
			description: 'Apples are really good fruits! Did you know that you can eat one different apple per days during one year without eating the same twice?!',
			quantity: 21,
			canBuy: true
		},
		{
			name: 'Pear',
			price: 0.7,
			description: 'Pears are generally sweat. They can be soft and juicy or crispy and dry.',
			quantity: 0,
			canBuy: true
		},
		{
			name: 'Orange',
			price: 1,
			description: 'Oranges are citrus. And they have the name of there color! Funny, isn\'t it?',
			quantity: 32,
			canBuy: false
		},
		{
			name: 'Grape',
			price: 1.3,
			description: 'God of fruits! We can do wine with it!!!!',
			quantity: 15
		}
	];
	
	var app = angular.module('store', []);
	
	app.controller('StoreController', function() {
		this.products = fruits;
	});
})();