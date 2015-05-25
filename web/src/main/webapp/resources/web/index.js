var indexApp = angular.module('indexApp', []);
indexApp.controller('IndexController',function($scope) {
	$scope.user="Angular";
	$scope.sayHello=function(){
		alert('Hello');
	};
});