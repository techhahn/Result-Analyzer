/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('newuserController', newuserController);

function newuserController($scope, toaster, $sanitize, userService){
	$scope.credentials= {};
	sanitizedcredentials= {};
	$scope.errors = {};

	$scope.addNewUser = function() {
		sanitizedcredentials.name = $sanitize($scope.credentials.name);
		sanitizedcredentials.email = $sanitize($scope.credentials.email);

		if(sanitizedcredentials.name && sanitizedcredentials.email) {
			userService.add(sanitizedcredentials).$promise.then(
				function(response) {
					toaster.pop("success","Added, " + response.name, "Sucessfully added new user!");
					$scope.credentials.name = '';
					$scope.credentials.email = '';
					$scope.errors = null;
				},
				function(response) {
					if(response.status == 403) {
						$scope.errors = response.data;
					}
					else if(response.status == 501) {
						toaster.pop("error", response.data);						
					}
				})
		}
		else {
			toaster.pop("error","No hacking!", "Please enter normal text without any html tags.");
		}
	}

};