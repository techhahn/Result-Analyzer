angular
	.module('result')
	.run(runBlock);

runBlock.$inject = ['$rootScope', '$state', 'loginService', 'toaster', 'sessionService'];

function runBlock($rootScope, $state, loginService, toaster, sessionService) {

	var routesThatRequireAuth = ['/dashboard'];
	var routesThatDoesNotRequireAuth = ['/login'];

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if(_(routesThatRequireAuth).contains(fromState.url) && !loginService.isLoggedIn()) {
			$state.transitionTo(toState.name || 'login');
		}

		if(_(routesThatDoesNotRequireAuth).contains(fromState.url) && loginService.isLoggedIn()) {
			$state.transitionTo(toState.name || 'dashboard');
		}

	})


}