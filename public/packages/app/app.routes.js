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
	.state('profile', {
		url: '/profile',
		templateUrl: 'packages/app/views/profile.html',
		controller: 'profileController',
		resolve: {
			user: ['loginService', function(loginService) {
				return loginService.user()
					.then(function(response) {
						return response.data;
					})
			}]
		}
		
	})
	.state('profile.edit', {
		url: '/edit',
		template: '<p>Edit User: <input type="text" ng-model="user.name"></p>'
	})
	.state('profile.adduser', {
		url: '/adduser',
		template: '<p>New User</p>'
	})
	.state('profile.feature2', {
		url: '/feature2',
		template: '<p>Second Feature</p>'
	})
}