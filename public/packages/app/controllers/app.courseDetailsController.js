/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('courseDetailsController', courseDetailsController);

function courseDetailsController($scope, toaster, $stateParams, $rootScope, $state, courseService, studentsFactory) {
	$scope.course = {};
	$scope.studentsCount = 0;
	$scope.exams = 0;
	$scope.students = {};

	courseService.get($stateParams.id).$promise.then(
		function(data){
			$scope.course = data;
		},
		function(error) {
			toaster.pop('warning', 'Problem loading course details.');
			$state.transitionTo('courses');
		});

	courseService.getStudents($stateParams.id)
		.success(function(data) {
			$scope.studentsCount = data;
		});

	courseService.getExams($stateParams.id)
		.success(function(data) {
			$scope.exams = data;
		});

	$scope.allStudents = function(id) {
		$('#modal-students').modal('show');
		$scope.loadStudents();
	}

	$scope.hidden = function(val) {
		//boadcast value
		$rootScope.$broadcast('hideCampus', {hidden: val});
		if (!val) {
			$state.transitionTo('courses');
		};
	}

	$scope.loadStudents = function() {
		studentsFactory
			.getStudents($stateParams.id, $scope.allStudentsYear)
			.success(function(data) {
				$scope.students = data;
			})
			.error(function(error) {
				toaster.pop('error', 'Error Loading Students Data');
			})
	}
}