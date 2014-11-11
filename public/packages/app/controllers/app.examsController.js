/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('examsController', examsController);

function examsController($scope, campusService, examService, toaster) {
	$scope.credentials = {};
	$scope.allCourses = {};
	$scope.allCampuses = {};
	$scope.exams = {data1: [], data2: []};

	$scope.credentials.subjects = [{name: '', marks: null}];

	examService.all().$promise.then(
			function(data){
				if (data.length) {
					var mid = Math.ceil(data.length/2);
					_.each(data, function(value, key) {
						if (key < mid) {
							$scope.exams.data1.push(value);
						}
						else {
							$scope.exams.data2.push(value);
						}
					})
				};
			},
	 		function(error){

	 		}
	 	);
	campusService.all().$promise.then(function(data) {
		$scope.allCampuses = data;
	});

	$scope.createExam = function() {
		$scope.credentials.campus_id = $scope.credentials.campus_id.id;
		$scope.credentials.course_id = $scope.credentials.course_id.id;
		examService.add($scope.credentials).$promise.then(
			function(data) {
				$scope.credentials = {}
				$scope.credentials.subjects = [{name: '', marks: null}];
				$scope.exams.data1.unshift(data);
				toaster.pop('success', 'Created Exam Sucessfully');
			},
			function(error) {
				toaster.pop('error', 'Error creating exam');
			})
	}


	$scope.loadCourses = function() {
		campusService.getCourses($scope.credentials.campus_id.id)
			.success(function(data) {
					$scope.allCourses = data;
				})
			.error(function(errors) {
				$scope.errors = errors;
			});
		
	}

	$scope.addSubject = function(){
		$scope.credentials.subjects.push({name:'', marks: null});
	}

	$scope.removeSubject = function(index) {
		$scope.credentials.subjects.splice(index, 1);
	}
}