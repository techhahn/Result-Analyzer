/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('editProfileController', editProfileController);

function editProfileController($scope, toaster, userService, $sanitize) {
	$scope.credentials = {};
	$scope.change = function() {

	var sanatizedCredentials = {};
	sanatizedCredentials.oldPassword = $sanitize($scope.credentials.oldPassword);
	sanatizedCredentials.newPassword = $sanitize($scope.credentials.newPassword);

		userService.update(sanatizedCredentials).$promise.then(
			function(response) {
				toaster.pop("success", "Sucessfully changed Password");
						$scope.errors = null;
						$scope.credentials.oldPassword = '';
						$scope.credentials.newPassword = '';
				},
				function(response) {
					if(response.status == 403) {
						$scope.errors = response.data;
					}
				})
	}
}