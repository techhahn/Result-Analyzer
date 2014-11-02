/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('studentsController', studentsController);

studentsController.$inject = ['$scope', '$state'];

function studentsController($scope, $state) {
	$scope.credentials = {};	
}