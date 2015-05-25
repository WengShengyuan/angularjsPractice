var indexApp = angular.module('indexApp', []);
indexApp.controller('IndexController',function($scope) {
	$scope.user="Angular";
	$scope.sb = {name:'name',gender:'male',age:28};
	$scope.sayHello=function(){
		alert('Hello!'+$scope.sb.name);
	};
});

indexApp.directive("ezNamecard",function($scope){
	return {
		restrict : "E",
		template : "<div></div>",
		link : function(scope,element,attrs){
			element.append("<div>name : <span class='name'></span></div>")
				.append("<div>gender : <span field='gender'></span></div>")
				.append("<div>age : <span field='age'></span></div>");
			scope.$watch(attrs.data,function(nv,ov){
				var fields = element.find("span");
				fields[0].innerText = nv.name;
				fields[1].innerText = nv.gender;
				fields[2].innerText = nv.age;
			},true);
		}
	};
});
indexApp.directive("ezNamecardEditor",function($scope){
	return {
		restrict : "E",
		template : "<div></div>",
		link : function(scope,element,attrs){
			var model = attrs.data;
			element.append("<div>name : <input type='text' field='name'></div>")
				.append("<div>gender : <input type='text' field='gender'></div>")
				.append("<div>age : <input type='text' field='age'></div>");
			element.find("input").on("keyup",function(ev){
				var field = ev.target.getAttribute("field");
				scope[model][field] = ev.target.value;
				scope.$apply("");
			});
		}
	};
});