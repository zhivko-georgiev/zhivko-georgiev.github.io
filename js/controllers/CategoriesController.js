onlineAdsApp.controller('CategoriesController', ['$scope', 'categoriesData',  function($scope, categoriesData){
	categoriesData.getCategories()
		.$promise
		.then(function (data) {
			$scope.categories = data;
		})

}])
