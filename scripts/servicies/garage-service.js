alert('fgdfh');
var app = angular.module('garageManager', ['ngMock']);

app.service('garageService', ['$http', function($http) {
	this.getPlaces = function() {
		return $htpp.get('/places');
	}
}])