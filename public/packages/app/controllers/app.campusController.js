/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('campusController', campusController);


function campusController($scope, campus, $sanitize, campusService, toaster) {
	$scope.credentials = {};
	$scope.campuses = campus;
	$scope.errors = {};

	$scope.addCampus = function() {
		var credentials = {};
		credentials.title = $sanitize($scope.credentials.title);
		credentials.description = $sanitize($scope.credentials.description);

		campusService.add(credentials).$promise.then(
			function(response) {
				$scope.campuses.push(response);
				$('#myModal').modal('hide');
				toaster.pop('success', 'Added ' + 'response.title' + ' campus!');
				$scope.errors = {};
			},
			function(response) {
				if(response.status == 403) {
					$scope.errors = response.data;
				}
			});

	}
}