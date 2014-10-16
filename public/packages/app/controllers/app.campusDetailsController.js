/**
* result Module
*
* Description
*/
angular
	.module('result')
	.controller('campusDetailsController', campusDetailsController);

function campusDetailsController($scope, toaster, $stateParams, campusDetail, $rootScope, $state, campusService) {
	$scope.campus = campusDetail;

	$scope.hidden = function(val) {
		//boadcast value
		$rootScope.$broadcast('hideCampus', {hidden: val});
		if (!val) {
			$state.transitionTo('campus');
		};
	}

	$scope.deleteCampus = function(id) {
		campusService.remove(id)
			.$promise.then(function(data) {
				toaster.pop('success', 'sucessfully deleted campus and its data.');
				$rootScope.$broadcast('hideCampus', {hidden: false});				
				$state.transitionTo('campus');
			},
			function(response) {
				toaster.pop('warning', 'Error while deleting data.');
			});
	}
}