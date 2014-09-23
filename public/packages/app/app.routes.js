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
	.state('campus', {
		parent: 'dashboard',
		url: '/campus',
		templateUrl: 'packages/app/views/campus.html',
		resolve: {
			campus: ['campusService', function(campusService) {
				return campusService.all().$promise.then(function(data) {
					return data;
				});
			}]
		},
		controller: 'campusController'
	})
	.state('courses', {
		parent: 'dashboard',
		url: '/courses',
		templateUrl: 'packages/app/views/courses.html'
	})
	.state('students', {
		parent: 'dashboard',
		url: '/students',
		templateUrl: 'packages/app/views/students.html'
	})
	.state('exams', {
		parent: 'dashboard',
		url: '/exams',
		templateUrl: 'packages/app/views/exams.html'
	})
	.state('campusDetails', {
		parent: 'campus',
		url: '/campusDetails:id',
		controller: 'campusDetailsController',
		templateUrl: 'packages/app/views/campusDetails.html',
		resolve: {
			campusDetail: ['campusService', '$stateParams', function(campusService, $stateParams) {
				return campusService.get($stateParams.id).$promise.then(function(data) {
					return data;
				})
			}]
		}
	})
}