/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('courseService', courseService);

function courseService($resource, loginService, $http) {
	var Course = $resource('/result-analyzer/Result-Analyzer/public/index.php/course/:id', null, {
		'update': {method: 'PUT', params: { id: '@id '}, isArray: false}
	});

	var get = function(uid) {
		return Course.get({id: uid}, function() {}, 
			function(response) {
				if (response.status == 401) {
					$state.transitionTo('login');
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					return false;
				};
			})
	}

	var all = function() {
		return Course.query(function() {},
			function(response) {
				if (response.status == 401) {
					$state.transitionTo('login');
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					return false;
				};
			});
	}

	var add = function(credentials) {
		return Course.save(credentials, function() {},
			function(response) {
				if (response.status == 401) {
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					$state.transitionTo('login');
				};
			}
			);
	}

	var getExams = function(id) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/getExamCountForCourse/'+id);
		  // success(function(data, status, headers, config) {
		  // }).
		  // error(function(data, status, headers, config) {
		  // });
	}

	var getStudents = function(id) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/getStudentCountForCourse/'+id);		
	}

	return {
		all: all,
		add: add,
		get: get,
		getStudents: getStudents,
		getExams: getExams
	}

}