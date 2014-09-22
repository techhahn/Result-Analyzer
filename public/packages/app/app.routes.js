angular
	.module('result')
	.config(config);

function config($stateProvider) {
	$stateProvider
	.state('/', {
		url: '',
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
		parent: 'profile',
		url: '/edit',
		templateUrl: 'packages/app/views/editProfile.html',
		controller: 'editProfileController'
	})
	.state('profile.adduser', {
		parent: 'profile',
		url: '/adduser',
		templateUrl: 'packages/app/views/newuser.html',
		controller: 'newuserController'
	})
}