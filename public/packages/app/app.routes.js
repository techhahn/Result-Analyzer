angular
	.module('result')
	.config(config);

function config($routeProvider) {
	$routeProvider
	.when('/',  {
		templateUrl: 'packages/app/views/login.html',
		controller: loginController
	})
	.when('/dashboard',  {
		templateUrl: 'packages/app/views/dashboard.html',
		controller: dashboardController
	})
}