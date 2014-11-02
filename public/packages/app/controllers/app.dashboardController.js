angular
	.module('result')
	.controller('dashboardController', dashboardController)

dashboardController.$inject = ['$scope', 'loginService', '$location', '$state'];

function dashboardController($scope, loginService, $location, $state) {
			$state.transitionTo('campus');
}