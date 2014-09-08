angular
	.module('result')
	.controller('loginController', loginController);


loginController.$inject = ['$scope', '$location', 'toaster', 'loginService'];

function loginController($scope, $location, toaster, loginService) {

	//username and password are in credentials object
	$scope.credentials = {};

	$scope.doLogin = function() {
		loginService.login($scope.credentials)
			.success(function(data) {
				toaster.pop('success', "Welcome " + data.name, "You are Logged in Sucessfully");
				$location.path('/dashboard');
			})
			.error(function() {
				toaster.pop('error', "Error email or password!");
			});




		// var un = $scope.credentials.username,
		// 	pass = $scope.credentials.password;

		// if(un == 'admin' && pass == 'admin') {
		// 	toaster.pop('success', "Welcome", "Loggedin Sucessfully");
		// 	$location.path('/dashboard');
		// }
		// else {			
		// 	toaster.pop('error', "Login Failed", "Username or Password incorrect!");
		// }
	}
}
