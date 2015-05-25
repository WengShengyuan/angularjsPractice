var indexApp = angular.module('indexApp', []);
indexApp.controller('IndexController',function($scope, $http) {
	
	$scope.user="Angular";
	$scope.sb = {name:'name',gender:'male',age:28};
	$scope.list = [{name:'name1',gender:'male',age:28},{name:'name2',gender:'female',age:30},{name:'name3',gender:'female',age:10},{name:'name4',gender:'male',age:5}];
	$scope.url = '/web/test/api/getUser';
	
	$scope.sayHello=function(){
		alert('Hello! \n$scope.sb.name:'+$scope.sb.name+";\nyourname:"+$scope.yourname);
	};
	

//	 $http.get('/web/test/api/getUser').success(function(data) {
//		 	console.log(data);
//		    $scope.valueViaHttp = data;
//	 });
});


