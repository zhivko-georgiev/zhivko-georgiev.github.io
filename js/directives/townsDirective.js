onlineAdsApp.directive('towns', function(){
	
	return {
		controller: 'TownsController',
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: '/templates/directives/towns.html',
		replace: true,
	};
});