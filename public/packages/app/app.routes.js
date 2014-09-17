angular
	.module('result')
	.config(config);

function config($stateProvider) {
	$stateProvider
	.state('/', {
		url: '/',
		template: '<h1>Default view </h1>'
	})
	.state('login',  {
		url: '/login',
		templateUrl: 'packages/app/views/login.html',
		controller: 'loginController'
	})
	.state('dashboard',  {
		url: '/dashboard',
		templateUrl: 'packages/app/views/dashboard.html',
		controller: 'dashboardController'
	})
}