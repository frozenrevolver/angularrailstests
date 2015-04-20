var appModule = angular.module('web_app', ['ui.router', 'templates']);

appModule.controller('HomeCtrl', [
		'$scope',
		function($scope){
			$scope.header = 'Hello world!';
			$scope.templateContent = 'This is a content!';

		}
	]);

appModule.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

	  $stateProvider
	    .state('home', {
	      url: '/home',
	      templateUrl: 'app/assets/templates/homepage.html',
	      controller: 'HomeCtrl'
	    });

	  $urlRouterProvider.otherwise('/home');
	}]);