angular
	.module('result')
	.run(runBlock);

runBlock.$inject = ['$rootScope', '$location', 'loginService', 'toaster'];

function runBlock($rootScope, $location, loginService, toaster) {

	var routesThatRequireAuth = ['/dashboard'];
	var routesThatDoesNotRequireAuth = ['/login'];

	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(_(routesThatRequireAuth).contains($location.path()) && !loginService.isLoggedIn()) {
			$location.path('/login');
		}

		if(_(routesThatDoesNotRequireAuth).contains($location.path()) && loginService.isLoggedIn()) {
			$location.path('/dashboard');
		}
	})
}