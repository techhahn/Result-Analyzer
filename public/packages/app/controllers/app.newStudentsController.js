/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('newStudentsController', newStudentsController);

newStudentsController.$inject = ['$scope'];

function newStudentsController($scope) {
	$scope.credentials = {};
}