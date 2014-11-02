/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('studentsFactory', studentsFactory)

studentsFactory.$inject = ['$resource', 'toaster', '$http'];

function studentsFactory($resource, toaster, $http) {
	var Student = $resource('/result-analyzer/Result-Analyzer/public/index.php/student/:id', null, {
		'update': {method: 'PUT', params: { id: '@id '}, isArray: false}
	});

	var all = function() {
		return Student.query(function(response, responseHeader) {

			},
			function(response, responseHeader) {
				if (response.status == 401) {
					$state.transitionTo('login');
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					return false;
				};
			});
	}

	var getStudents = function(course, year) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/getStudentsByCourseYear/'+course+'/'+year);
	}

	var add = function(credentials) {
		return Student.save(credentials, function() {},
			function(response){
				if (response.status == 401) {
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					$state.transitionTo('login');
				};
			});
	}


	return {
		add: add,
		all: all,
		getStudents: getStudents
	}
}