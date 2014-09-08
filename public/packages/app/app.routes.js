angular
	.module('result')
	.config(config);

function config($routeProvider) {
	$routeProvider
	.when('/login',  {
		templateUrl: 'packages/app/views/login.html',
		controller: loginController
	})
	.when('/dashboard',  {
		templateUrl: 'packages/app/views/dashboard.html',
		controller: dashboardController
	})
}