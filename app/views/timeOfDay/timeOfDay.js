'use strict';

angular.module('myApp.timeOfDay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/timeOfDay', {
    templateUrl: 'views/timeOfDay/timeOfDay.html',
    controller: 'TimeOfDayCtrl',
    controllerAs: 'vm'
  });
}])

.controller('TimeOfDayCtrl', [
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