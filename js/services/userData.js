onlineAdsApp.factory('userData', ['$resource', 'BaseServiceUrl', 'authentication', function($resource, BaseServiceUrl, authentication) {
	
	function registerUser(user) {

		var resource = $resource(BaseServiceUrl + 'user/login ')
			.save(user);

			resource
				.$promise
				.then(function (data) {
					authentication.saveUser(data);
					authentication.getHeaders();
				});
		return resource;
	}

	function loginUser(user) {
		
		var resource = $resource(BaseServiceUrl + 'user/login ')
			.save(user);

			resource
				.$promise
				.then(function (data) {
					authentication.saveUser(data);
					authentication.getHeaders();
				});

		return resource;
			
	}

	function logoutUser() {
		return $resource(BaseServiceUrl + 'user/logout ')
			.save(user)
			.$promise
			.then(function (data) {
				authentication.removeUser();
			});
	}

	return {
		register: registerUser,
		login: loginUser,
		logout: logoutUser	
	}
}])