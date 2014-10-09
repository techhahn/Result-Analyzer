/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('coursesController', coursesController);

function coursesController($scope, courses, campusService, $sanitize, courseService, toaster) {
	$scope.courses = courses;
	$scope.credentials = {};
	$scope.allCampus = {};


	$scope.addCourse = function() {
		var credentials = {
				title: $sanitize($scope.credentials.title),
				campus_id: $sanitize($scope.credentials.campus_id.id),
				description: $sanitize($scope.credentials.description)
			};
		courseService.add(credentials)
			.$promise.then(
			function(response) {
				$scope.courses.push(response);
				$('#myModal').modal('hide');
				toaster.pop('success', 'Added ' + 'response.title' + ' course!');
				$scope.errors = {};
			},
			function(response) {
				if(response.status == 403) {
					$scope.errors = response.data;
				}
			});
	}

	campusService.allCampuses()
		.success(function(data) {
			$scope.allCampus = data;
		})


}