onlineAdsApp.factory('categoriesData', ['$resource', 'BaseServiceUrl', function($resource, BaseServiceUrl) {

	var resource = $resource(BaseServiceUrl + 'categories');

	function getCategories() {
		return resource.query();
	}

	return {
		getCategories: getCategories
	}
}])
