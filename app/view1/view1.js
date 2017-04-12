'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View1Ctrl', [
  function() {
    var vm = this;

    vm.updateTimeOfDayDisplay = function () {
      var time = new Date();

      var hour = time.getHours();

      if (hour >= 0 && hour < 6 || hour > 18)
      {
          vm.timeOfDayMessage = "Night";
      }
      if (hour >= 6 && hour < 12)
      {
          vm.timeOfDayMessage = "Morning";
      }
      if (hour >= 12 && hour < 18)
      {
          vm.timeOfDayMessage = "Afternoon";
      }
    }

  }
]);