angular
	.module('result')
	.config(config);

function config($stateProvider) {
	$stateProvider
	.state('/', {
		url: '',
		templateUrl: 'packages/app/views/default.html'
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
		templateUrl: 'packages/app/views/courses.html',
		controller: 'coursesController',
		resolve: {
			courses: ['courseService', function(courseService) {
				return courseService.all().$promise.then(function(data) {
					return data;
				})
			}]
		}
	})
	.state('exams', {
		parent: 'dashboard',
		url: '/exams',
		controller: 'examsController',
		templateUrl: 'packages/app/views/exams.html'
	})
	.state('examDetails', {
		parent: 'exams',
		url: '/examDetails:id',
		controller: 'examDetailsController',
		templateUrl: 'packages/app/views/examDetails.html'
		// resolve: {
		// 	exams: ['examService', '$stateParams', function(examService, $stateParams) {
		// 		return examService.get($stateParams.id)
		// 				.$promise.then(function(data){
		// 					return data;
		// 				})
		// 	}]
		// }
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
	.state('courseDetails', {
		parent: 'courses',
		url: '/courseDetails:id',
		controller: 'courseDetailsController',
		templateUrl: 'packages/app/views/courseDetails.html'
	})
	.state('students', {
		parent: 'dashboard',
		url: '/students',
		templateUrl: 'packages/app/views/students.html',
		controller: 'studentsController'
	})
	.state('allStudents', {
		parent: 'students',
		url: '/allStudents',
		templateUrl: 'packages/app/views/allStudents.html',
		controller: 'allStudentsController'
	})
	.state('newStudents', {
		parent: 'students',
		url: '/newStudents',
		templateUrl: 'packages/app/views/newStudents.html',
		controller: 'newStudentsController'
	})
}