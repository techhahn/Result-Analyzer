angular
	.module('result')
	.run(runBlock);

runBlock.$inject = ['$rootScope', '$state', 'loginService', 'toaster', 'sessionService'];

function runBlock($rootScope, $state, loginService, toaster, sessionService) {

	var routesThatRequireAuth = ['/dashboard', '/profile', '/profile/adduser', '/profile/edit', '/dashboard/campus', '/dashboard/courses', '/dashboard/students', '/dashboard/exams', '/dashboard/campus/campusDetails'];
	var routesThatDoesNotRequireAuth = ['/login'];

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		if(_(routesThatRequireAuth).contains(toState.url) && !loginService.isLoggedIn()) {
			$state.transitionTo(fromState.name || 'login');
			toaster.pop('error', 'Not logged In!', 'You are not logged in. You cannot access these pages without login.');
			event.preventDefault();
		}

		if(_(routesThatDoesNotRequireAuth).contains(toState.url) && loginService.isLoggedIn()) {
			$state.transitionTo(fromState.name || 'dashboard');
			toaster.pop('warning', 'Already logged In.', 'You are already logged In, please log out first to log in with a different account.');
			event.preventDefault();
		}

	})


}