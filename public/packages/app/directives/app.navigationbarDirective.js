/**
* result Module
*
* Description
*/
angular
	.module('result')
	.directive('navBar', navBar);

navBar.$inject = ['loginService', '$log', '$location'];
function navBar(loginService, $log, $location) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs, controller) {
			loginService.user()
				.success(function(data) {
					scope.user = data;
				})

			scope.isloggedIn = loginService.isLoggedIn();

			scope.$on('updateUser', function(event, args) {
				if(args.login) {
					scope.user = args.user;
					scope.isloggedIn = loginService.isLoggedIn();
				}
				else {
					scope.user = null;
					scope.isloggedIn = loginService.isLoggedIn();
				}
			})

			scope.logout = function() {
				loginService.logout()
					.success(function() {
						$location.path('/login');
				})
			}
		},
		replace: true,
		scope: true,
		templateUrl: 'packages/app/views/navbar.html'
	}



	
}