onlineAdsApp.controller('RegisterController', ['$scope', '$location','userData', 'messaging', function($scope, $location, userData, messaging) {

	$scope.register = function (user) {
		userData.register(user)
			.$promise
			.then(function (data) {
				messaging.messageSuccess('Register Successful!');
				$location.path('/ads');
				}, function(error) {
				messaging.messageError('' + error.data.error_description);
			}); 
		}
}]);