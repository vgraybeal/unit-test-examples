'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',
  function($scope) {

    $scope.updateTimeOfDayDisplay = function () {
      $scope.timeOfDayMessage = $scope.getTimeOfDay();
    }

    $scope.getTimeOfDay = function () {
      var time = new Date();

      var hour = time.getHours();

      if (hour >= 0 && hour < 6 || hour > 18)
      {
          return "Night";
      }
      if (hour >= 6 && hour < 12)
      {
          return "Morning";
      }
      if (hour >= 12 && hour < 18)
      {
          return "Afternoon";
      }
      return 
    }

  }
]);