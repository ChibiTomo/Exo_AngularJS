(function() {
	var app = angular.module('my_app', [ 'ngAnimate' ]);

	var scope;
	app.controller('MyController', function($scope) {
		scope = $scope;
		$scope.side = 'left';
		$scope.counter = 0;
		$scope.rockingNbr = 10;
		$scope.duration = 1000;
	});

	app.animation('.square', function() {
		console.log(scope);

		var goRight = function(element, className, done) {
			if (className != 'left') {
				return;
			}
			console.log('goRight');

			element.css({
				position: 'relative',
				left: 0,
			});

			jQuery(element).animate({
				left: 500
			}, scope.duration, function() {
				done();
				scope.side = 'left';
				scope.$apply();
			});
		};

		var goLeft = function(element, className, done) {
			if (className != 'left') {
				return;
			}
			console.log('goLeft');

			element.css({
				position: 'relative',
				left: 500,
			});

			jQuery(element).animate({
				left: 0
			}, scope.duration, function() {
				done();

				scope.counter++;
				if (scope.counter < scope.rockingNbr) {
					scope.side = 'right';
				} else {
					scope.counter = 0;
				}
				scope.$apply();
			});
		};

		return {
			addClass: goLeft,
			removeClass: goRight
		};
	});
})();