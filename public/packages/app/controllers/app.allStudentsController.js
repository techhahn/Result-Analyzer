/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('allStudentsController', allStudentsController);

allStudentsController.$inject = ['$scope'];

function allStudentsController($scope) {
	$scope.credentials = {};

	
}