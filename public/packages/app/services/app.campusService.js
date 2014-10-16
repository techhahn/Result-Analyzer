/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('campusService', campusService)

function campusService($resource, loginService, toaster, $state, $http) {
	var Campus = $resource('/result-analyzer/Result-Analyzer/public/index.php/campus/:id', null, {
		'update': {method: 'PUT', params: { id: '@id '}, isArray: false}
	});

	var getCourses = function(cid) {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/campusCourses/' + cid).
				  success(function(data, status, headers, config) {
				    return data;
				  }).
				  error(function(data, status, headers, config) {
				    toaster.pop('error', data)
				  });
	}

	var get = function(uid) {
		return Campus.get({id: uid}, function() {}, 
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
		return Campus.query(
			function(response, responseHeader) {

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
	var add = function(credentials) {
		return Campus.save(credentials, function() {},
			function(response){
				if (response.status == 401) {
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					$state.transitionTo('login');
				};
			});
	}


	var allCampuses = function() {
		return $http.get('/result-analyzer/Result-Analyzer/public/index.php/allCampuses');
	}

	var remove = function(_id) {
		return Campus.delete({id:_id}, function() {},
			function(response){
				if (response.status == 401) {
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					$state.transitionTo('login');
				};				
			})
	}

	return {
		all: all,
		add: add,
		get: get,
		allCampuses: allCampuses,
		getCourses: getCourses,
		remove: remove
	}
}
