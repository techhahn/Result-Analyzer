angular
	.module('result')
	.controller('loginController', loginController);

function loginController($scope) {
	//username and password are in credentials object
	$scope.credentials = {};
}
