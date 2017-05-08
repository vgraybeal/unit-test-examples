'use strict';

angular.module('myApp.smartHome')


.controller('SmartHomeCtrl', ['SmartHomeService', 'BackyardLightService', 'FrontyardLightService', '$rootScope',
  function(SmartHomeService, BackyardLightService, FrontyardLightService, $rootScope) {
    var vm = this;
    vm.backyardLightState = "off";
    vm.frontyardLightState = "off";
    vm.timeOfDay = "";

    vm.displayTimeOfDay = function () {
      vm.timeOfDay = SmartHomeService.getTimeOfDay();
    }

    vm.triggerMotion = function () {
      SmartHomeService.actuateLights(turnLightsOn, turnLightsOff);
    }

    var turnLightsOn = function () {
      BackyardLightService.turnLightsOn();
      FrontyardLightService.turnLightsOn();
    }

    var turnLightsOff = function () {
      BackyardLightService.turnLightsOff();
      FrontyardLightService.turnLightsOff();
    }

    vm.toggleLights = function () {
      BackyardLightService.toggleLights();
      FrontyardLightService.toggleLights();
    }

    $rootScope.$on('switchBackyardLights', function (event, newLightState) {
      vm.backyardLightState = newLightState;
    })

    $rootScope.$on('switchFrontyardLights', function (event, newLightState) {
      vm.frontyardLightState = newLightState;
    })
  }
]);