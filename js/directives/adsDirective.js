onlineAdsApp.directive('ads', function(){
	
	return {
		controller: 'AdsController',
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: '/templates/directives/public-ads.html',
		replace: true,
	};
});