angular
	.module('result')
	.config(config);

function config($routeProvider) {
	$routeProvider
	.when('/',  {
		templateUrl: 'packages/app/views/login.html',
		controller: loginController
	});
}