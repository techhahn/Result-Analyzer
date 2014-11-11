/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('examService', examService);

function examService($resource, toaster, $http) {
	var Exam = $resource('/result-analyzer/Result-Analyzer/public/index.php/exam/:id', null, {
		'update': {method: 'PUT', params: { id: '@id '}, isArray: false}
	});

	var all = function() {
		return Exam.query(function(response, responseHeader) {

			},
			function(response, responseHeader) {
				if (response.status == 401) {
					$state.transitionTo('login');
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					return false;
				};
			});
	};

	var get = function(eid) {
		return Exam.get({id: eid}, function() {}, 
			function(response) {
				if (response.status == 401) {
					$state.transitionTo('login');
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					return false;
				};
			})
	}


	var getExamsByStudent = function(id) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/getExamByStudent/'+id);
	}

	var getExamsByCampus = function(id) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/getExamByCampus/'+id);
	}


	var getExamsByCourse = function(id) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/getExamByCourse/'+id);
	}


	var add = function(credentials) {
		return Exam.save(credentials, function() {},
			function(response){
				if (response.status == 401) {
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					$state.transitionTo('login');
				};
			});
	}

	return {
		all: all,
		get: get,
		getExamsByStudent: getExamsByStudent,
		getExamsByCampus: getExamsByCampus,
		getExamsByCourse: getExamsByCourse,
		add: add

	}
}