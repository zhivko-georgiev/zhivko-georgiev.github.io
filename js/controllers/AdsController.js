onlineAdsApp.controller('AdsController', ['$scope', 'adsData', 'filter', function($scope, adsData, filter) {
	
		function loadPublicAds(filterParams) {

		 filterParams = filterParams || {};

			adsData.getPublicAds(filterParams)
				.$promise
				.then(function (data) {
					$scope.data = data;
				});
		}

		loadPublicAds();

		$scope.$on('categoryClicked', function (event, category) {
			loadPublicAds(filter.getFilterParams());
		})
}])
	