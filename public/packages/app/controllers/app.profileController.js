/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('profileController', profileController);

profileController.$inject = ['$scope', 'user'];

function profileController($scope, user) {
	$scope.user = user;
}