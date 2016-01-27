describe('testing the garage service', function() {
	describe('when loading all busy spaces', function() {
		beforeEach(function() {
			module('garageManager');
		});
		
		var service, httpBackend;
		
		beforeEach(inject(function($injector) {
			service = $injector.get('garageService');
			httpBackend = $injector.get('$httpBackend');
		}));
		
		it('should return the expected number of busyspaces', function(){
			httpBackend.when('GET', '/places')
				.respond([
					{license:'AB-23', type:'Car', level:4, space:3},
					{license:'AB-23', type:'Car', level:4, space:3}
				]);
				service.getPlaces().then(function(response) {
					expect(response.data.length).toBe(2);
				})
		});
	})
});
