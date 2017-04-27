'use strict';

angular.module('myApp.timeOfDay')


.controller('SmartHomeCtrl', ['SmartHomeService', '$rootScope',
  function(SmartHomeService, $rootScope) {
    var vm = this;
    vm.lightsState = "off";
    vm.timeOfDay = "";

    vm.displayTimeOfDay = function () {
      vm.timeOfDay = SmartHomeService.getTimeOfDay();
    }

    vm.triggerMotion = function () {
      SmartHomeService.actuateLights();
    }

    vm.toggleLights = function () {
      SmartHomeService.toggleLights();
    }

    $rootScope.$on('switchLights', function (event, newLightState) {
      vm.lightsState = newLightState;
    })

  }
]);