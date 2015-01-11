onlineAdsApp.directive('header',  function(){
	
	return {
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: '/templates/directives/header.html',
		replace: true,
	
	};
});