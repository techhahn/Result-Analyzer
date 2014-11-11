/**
* result Module
*
* Description
*/
angular
	.module('result')
	.directive('examDetails', [function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {
				'data': '='
			},
			 // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs, $transclude, examService, toaster) {
				$scope.exam = {};
				$scope.errors = {};
				var exam_id = $scope.data;

				examService.get(exam_id)
					.$promise.then(
						function(data) {
							$scope.exam = data;
						},
						function(error) {
							$scope.errors = error;
						}
				);


			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: ' - ExamDetails',
			templateUrl: 'packages/app/views/examDetailsDirective.html',
			// replace: true,
			transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
			}
		};
	}]);