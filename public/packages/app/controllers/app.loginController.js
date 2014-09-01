angular
	.module('result')
	.controller('loginController', loginController);


loginController.$inject = ['$scope', '$location', 'toaster'];

function loginController($scope, $location, toaster) {
	//username and password are in credentials object
	$scope.credentials = {};

	$scope.doLogin = function() {
		var un = $scope.credentials.username,
			pass = $scope.credentials.password;

		if(un == 'admin' && pass == 'admin') {
			toaster.pop('success', "Welcome", "Loggedin Sucessfully");
			$location.path('/dashboard');
		}
		else {			
			toaster.pop('error', "Login Failed", "Username or Password incorrect!");
		}
	}
}
