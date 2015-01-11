onlineAdsApp.factory('townsData', ['$resource', 'BaseServiceUrl', function($resource, BaseServiceUrl) {

	var resource = $resource(BaseServiceUrl + 'towns');

	function getAllTowns() {
		return resource.query();
	}

	return {
		getTowns: getAllTowns
	}
}])
