onlineAdsApp.directive('categories',  function(){
	
	return {
		controller: 'CategoriesController',
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		templateUrl: '/templates/directives/categories.html',
		replace: true,
	};
});