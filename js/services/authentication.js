onlineAdsApp.factory('authentication',  function() {
	
	var key = 'user';

	function saveUserData(data) {
		localStorage.setItem(key, angular.toJson(data));
	}

	function getUserData() {
		return angular.fromJson(localStorage.getItem(key));
	}

	function getHeaders(argument) {
		var headers = {};
		var userData = getUserData();
		if (userData) {
			headers.Authorization = 'Bearer ' + getUserData().access_token;
		};

		return headers;
	}

	function removeUser() {
		localStorage.removeItem(key);
	}

	function isAdmin() {
		var isAdmin = getUserData().isAdmin;

		return isAdmin; 
	}


	return {
		saveUser: saveUserData,
		getUserData: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin
	}
});

