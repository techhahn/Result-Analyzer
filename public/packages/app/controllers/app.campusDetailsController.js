/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('campusDetailsController', campusDetailsController);

function campusDetailsController($scope, $stateParams, campusDetail, $rootScope, $state) {
	$scope.campus = campusDetail;

	$scope.hidden = function(val) {
		//boadcast value
		$rootScope.$broadcast('hideCampus', {hidden: val});
		if (!val) {
			$state.transitionTo('campus');
		};
	}
}