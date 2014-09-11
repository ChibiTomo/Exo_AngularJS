(function() {
	var fruits = [
		{
			name: 'Apple',
			price: 0.5,
			description: 'Apples are really good fruits! Did you know that you can eat one different apple per days during one year without eating the same twice?!',
			quantity: 21,
			canBuy: true,
			images: [
				'http://pngimg.com/upload/apple_PNG4938.png',
				'http://pngimg.com/upload/small/apple_PNG4737.png'
			]
		},
		{
			name: 'Pear',
			price: 0.7,
			description: 'Pears are generally sweat. They can be soft and juicy or crispy and dry.',
			quantity: 0,
			canBuy: true,
			images: []
		},
		{
			name: 'Orange',
			price: 1,
			description: 'Oranges are citrus. And they have the name of there color! Funny, isn\'t it?',
			quantity: 32,
			canBuy: false,
			images: [
				'http://thedeliciousrevolution.com/wp-content/uploads/2008/08/Pears.png',
				'http://wp10926194.server-he.de/data/images/fruit_images/full/pear.png'
			]
		},
		{
			name: 'Grape',
			price: 1.3,
			description: 'God of fruits! We can do wine with it!!!!',
			quantity: 15,
			images: [
				'http://thedeliciousrevolution.com/wp-content/uploads/2008/08/Pears.png',
				'http://wp10926194.server-he.de/data/images/fruit_images/full/pear.png'
			]
		}
	];
	
	var app = angular.module('store', []);
	
	app.controller('StoreController', function() {
		this.products = fruits;
	});
})();