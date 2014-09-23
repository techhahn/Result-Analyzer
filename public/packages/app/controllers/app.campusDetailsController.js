/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('campusDetailsController', campusDetailsController);

function campusDetailsController($scope, $stateParams, campusDetail) {
	$scope.campus = campusDetail;
}