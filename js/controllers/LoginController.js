onlineAdsApp.controller('LoginController', ['$scope', '$location','userData', 'messaging', function($scope, $location, userData, messaging) {

	$scope.login = function (user) {
		userData.login(user)
			.$promise
			.then(function (data) {
				messaging.messageSuccess('Login Successful!');
				$location.path('/ads');
			}, function(error) {
				messaging.messageError('Invalid User or Password!');
				});
	}
}]);