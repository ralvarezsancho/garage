/*angular
	.module('app', ['ui.router']);
*/
	
/*
$htpp({
  method: 'GET',
  url: 'EmployeeService.asmx/GetAllEmployees'
});
*/


/*var app = angular
	.module("module", [])
	.controller("homeCtrl", function ($scope, $http, $log) {
		var successCallBack = function(response) {
		$scope.busyspaces = response.data;
		$log.info(reason);
		};
		var errorCallBack = function(response) {
			$scope.error = reason.data;
			$log.info(reason);
		};
		$http({
			method: 'GET',
			url: 'EmployeeService.asmx/GetAllEmployees'
		})
			.then(successCallBack, errorCallBack);
	});*/
angular.module('garageManager')
	.controller('MainCtrl', function ($scope, $http) {
		$scope.awesomeThings = [
			'HTML5',
			'AngularJS'
			'Karma'
		];
		
		$scope.values = [];
		
		$scope.url = 'Scientists.json'
		
		$scope.getJson = function () {
			var response = $http.get($scope.url);
			response.success(function (scientists) {
				for (var i = 0; i < scientists.legth; i++) {
					$scope.values.push(scientists[i].firsName + ' ' + scientists[i].lastName);
				}
			})
		}
	});
//https://www.youtube.com/watch?v=xzjYOUlehag
//https://www.youtube.com/watch?v=qhncBUvkRX4
//https://docs.angularjs.org/api/ngMock
//https://www.youtube.com/watch?v=QETUuZ27N0w
//https://github.com/ralvarezsancho/garage








