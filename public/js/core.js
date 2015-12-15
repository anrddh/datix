var myApp = angular.module('datixApp', []);

myApp
	.controller('mainCtr', function($scope) {
		$scope.$watch('date', function(newValue, oldValue) {
	    if(newValue !== undefined) {
	      if (isNaN(newValue)) {
	        $scope.unix = moment(newValue).unix();
	        if(isNaN($scope.unix)) {
	          $scope.unix = 'null';
	          $scope.dateStr = 'null';
	        } else {
	          $scope.dateStr = "'" + newValue + "'";
	        }
	      } else {
	        $scope.unix = newValue;
	        $scope.dateStr = moment.unix(Number(newValue)).format("MMMM Do YYYY, h:mm:ss a");
	      }
	    } else {
	      $scope.unix = 'null';
	      $scope.dateStr = 'null';
	    }
	  });
	});
