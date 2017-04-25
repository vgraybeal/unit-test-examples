'use strict';

angular.module('myApp.timeOfDay')


.controller('SmartHomeCtrl', ['TimeOfDayService', '$rootScope',
  function(TimeOfDayService, $rootScope) {
    var vm = this;
    var lastMotionTime;
    vm.lightsState = "on";
    vm.timeOfDay = "";

    vm.displayTimeOfDay = function () {
      vm.timeOfDay = TimeOfDayService.getTimeOfDay();
    }

    vm.actuateLights = function () {
      TimeOfDayService.actuateLights();
    }

    $rootScope.$on('switchLights', function (event, newLightState) {
      vm.lightsState = newLightState;
    })

  }
]);