onlineAdsApp.controller('AdsController',  function ($scope, $log, adsData, categoriesData) {
	adsData.getPublicAds()
		.$promise
		.then(function (data) {
			$scope.data = data;
		});	
})
