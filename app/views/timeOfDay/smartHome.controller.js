'use strict';

angular.module('myApp.timeOfDay')


.controller('SmartHomeCtrl', ['SmartHomeService', '$rootScope',
  function(SmartHomeService, $rootScope) {
    var vm = this;
    vm.lightsState = "on";
    vm.timeOfDay = "";

    vm.displayTimeOfDay = function () {
      vm.timeOfDay = SmartHomeService.getTimeOfDay();
    }

    vm.actuateLights = function () {
      SmartHomeService.actuateLights();
    }

    $rootScope.$on('switchLights', function (event, newLightState) {
      vm.lightsState = newLightState;
    })

  }
]);