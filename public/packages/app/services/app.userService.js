/**
* result Module
*
* Description
*/
angular
	.module('result')
	.factory('userService', userService)

function userService($resource, loginService, toaster, $state) {
	var User = $resource('/result-analyzer/Result-Analyzer/public/index.php/user/:id', null, {
		'update': {method: 'PUT', params: { id: 1 }, isArray: false}
	});

	var add = function(credentials) {
		var newUser = User.save(credentials, 
			function(response, responseHeader) {},
			function(response, responseHeader) {
				if (response.status == 401) {
					$state.transitionTo('login');
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					return false;
				};
			});
		return newUser;
	}

	var update = function(credentials) {
		return User.update(credentials, function()
			{},
			function(response, getResponseHeader) {
				if (response.status == 401) {
					toaster.pop('error', 'You are not logged in', 'Please login Again');
					loginService.logout();
					$state.transitionTo('login');
				};
			});
	}

	return {
		add: add,
		update: update
	}
}
