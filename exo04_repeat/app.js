(function() {
	// NEW CODE
	var fruits = [
		{
			name: 'Apple',
			price: 0.5,
			description: 'Apples are really good fruits! Did you know that you can eat one different apple per days during one year without eating the same twice?!'
		},
		{
			name: 'Pear',
			price: 0.7,
			description: 'Pears are generally sweat. They can be soft and juicy or crispy and dry.'
		},
		{
			name: 'Orange',
			price: 1,
			description: 'Oranges are citrus. And they have the name of there color! Funny, isn\'t it?'
		},
		{
			name: 'Grape',
			price: 1.3,
			description: 'God of fruits! We can do wine with it!!!!'
		}
	];
	//END NEW CODE

	var app = angular.module('store', []);

	//NEW CODE
	app.controller('StoreController', function() {
		this.products = fruits;
	});
	//END NEW CODE
})();