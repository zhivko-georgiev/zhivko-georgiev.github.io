onlineAdsApp.directive('categories',  function(){
	
	return {
		controller: 'CategoriesController',
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: '/templates/directives/categories.html',
		replace: true,
	};
});