angular
	.module('result')
	.run(runBlock);

runBlock.$inject = ['$rootScope', '$location', 'loginService', 'toaster', 'sessionService'];

function runBlock($rootScope, $location, loginService, toaster, sessionService) {

	var routesThatRequireAuth = ['/dashboard'];
	var routesThatDoesNotRequireAuth = ['/login'];

	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if(_(routesThatRequireAuth).contains($location.path()) && !loginService.isLoggedIn()) {
			$location.path('/login');
		}

		if(_(routesThatDoesNotRequireAuth).contains($location.path()) && loginService.isLoggedIn()) {
			$location.path('/dashboard');
		}

		if(loginService.isLoggedIn()) {
			loginService.isLoggedInHttp()
				.success(function(data) {
					if(data == 1) {
						loginService.user()
							.success(function(user) {
								if(!user.email == sessionService.get('authenticated')) {
									loginService.logout();
								}
							})
					}
					else if(data == 0) {
						loginService.logout();
					}
				})
		}
	})


}