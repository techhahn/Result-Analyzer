angular
	.module('result')
	.factory('loginService', loginService)

loginService.$inject = ['$http', 'sessionService', '$rootScope'];

function loginService($http, sessionService, $rootScope) {
	function login(credentials) {
		var loginPromise = $http.post('/result-analyzer/Result-Analyzer/public/index.php/api/login/auth', credentials)
			.success(function(data) {
				sessionService.set('authenticated', data.email);
				sessionService.set('authName', data.name);
				$rootScope.$broadcast('updateUser', {login: true, user: data});
			});
		return loginPromise;
	}

	function logout() {
		var logoutPromise = $http.get('/result-analyzer/Result-Analyzer/public/index.php/api/logout/auth')
			.success(function() {
				sessionService.destroy('authenticated');
				sessionService.destroy('authName');
				$rootScope.$broadcast('updateUser', {login: false});
			});

		return logoutPromise;
	}

	function isLoggedIn() {
		return sessionService.get('authenticated');
	}

	function isLoggedInHttp() {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/api/loggedIn/auth');
	}

	function user() {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/api/user/auth');
	}

	return {
		login: login,
		logout: logout,
		isLoggedIn: isLoggedIn,
		user: user,
		isLoggedInHttp: isLoggedInHttp
	}
}