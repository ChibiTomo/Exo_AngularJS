(function() {
	var app = angular.module('stars', []);

	app.directive('stars', function(){
		return {
			restrict: 'E',
			templateUrl: 'stars.html',
			controller: function() {
				this.getRange = function(nbr) {
					nbr = nbr || 0;
					return new Array(nbr);
				};
			},
			controllerAs: 'starCtrl'
		};
	});
})();