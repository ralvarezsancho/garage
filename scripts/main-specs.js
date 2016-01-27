describe('Controller: MainCtrl', function () {
	'use strict';
	
	//load the controller's module
	beforeEach(module('garageManager'));
	
	var $http,
		$httpBackend,
		MainCtrl,
		scope;
	
	beforeEach(inject(function (_$http_, _$httpBackend_) {
		$http = _$http_;
		$httpBackend = _$httpBackend_;
	}));
	
	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	//Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope: scope
		});
	}));

	it('should attach a list of awesomeThings to the scope', function () {
	
		expect(scope.awesomeThings.length).toBe(3);
	});
	
	it('should get first and last name of two scientists from json');
	
	$scope.getJson(); // Mtehod to test
	
	$httpBackend.flush(); // Simulate response from server
	
	expect(scope.values[0]).toEqual('Isaac Newton');
	});
});