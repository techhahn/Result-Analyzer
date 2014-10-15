/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('newStudentsController', newStudentsController);

newStudentsController.$inject = ['$scope', 'campusService', 'studentsFactory', 'toaster'];

function newStudentsController($scope, campusService, studentsFactory, toaster) {
	$scope.credentials = {};
	$scope.allCourses = {};
	$scope.allCampuses = {};
	$scope.errors = {};

	campusService.all().$promise.then(function(data) {
		$scope.allCampuses = data;
	});


	$scope.loadCourses = function() {
		campusService.getCourses($scope.credentials.campus_id.id)
			.success(function(data) {
					$scope.allCourses = data;
				})
			.error(function(errors) {
				$scope.errors = errors;
			});
		
	}

	$scope.createStudent = function() {
		$scope.credentials.campus_id = $scope.credentials.campus_id.id;
		$scope.credentials.course_id = $scope.credentials.course_id.id;
		
		studentsFactory.add($scope.credentials)
			.$promise.then(
				function(data) {
					toaster.pop('success', 'Added Student sucessfully');
					_.each($scope.credentials, function(i) {
						i = '';
					})
				},
				function(error) {
					$scope.errors = error;
				})

	}

}