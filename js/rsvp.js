var rsvp = angular.module('rsvp', ['ngResource']);

rsvp.service('Rsvp', ['$resource', function($resource){
	return $resource('/rsvp');
}]);

rsvp.controller('RsvpCtrl', ['$scope', 'Rsvp', function($scope, Rsvp){
	$scope_submit_error = null;
	$scope.submit = function(form){
		console.log(form);
		Rsvp.save(form)
			.$promise.then(function(result){
				$scope.submitted = true;
				alert("Mulţumim!");
			},
			function(err){
				alert("Eroare: ", err);
				$scope.submit_error = err;
			});
	}
}]);
