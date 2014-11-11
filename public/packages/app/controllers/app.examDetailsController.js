/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('examDetailsController', examDetailsController);

function examDetailsController($scope, examService, $stateParams) {
	$scope.exam_id = $stateParams.id;

}