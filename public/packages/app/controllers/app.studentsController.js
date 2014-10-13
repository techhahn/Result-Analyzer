/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('studentsController', studentsController);

studentsController.$inject = ['$scope'];

function studentsController($scope) {
	$scope.credentials = {};

	
}