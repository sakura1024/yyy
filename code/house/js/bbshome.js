var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {
	$scope.count=0;
	$scope.toggle = function() {
		//默认$scope.hide=false
		$scope.hide = !$scope.hide;
		
	}
});