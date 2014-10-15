/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('allStudentsController', allStudentsController);

allStudentsController.$inject = ['$scope', 'studentsFactory'];

function allStudentsController($scope, studentsFactory) {
	$scope.students = {};

	studentsFactory.all()
		.$promise.then(
			function(data){
				$scope.students = data;
			}
		);

	
}