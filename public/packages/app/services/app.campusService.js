/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('campusService', campusService)

function campusService($resource, loginService, toaster, $state) {
	var Campus = $resource('/result-analyzer/Result-Analyzer/public/index.php/campus/:id', null, {
		'update': {method: 'PUT', params: { id: '@id '}, isArray: false}
	});

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

	return {
		all: all,
		add: add,
		get: get
	}
}
