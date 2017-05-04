'use strict';

angular.module('myApp.smartHome')


.controller('SmartHomeCtrl', ['SmartHomeService', '$rootScope',
  function(SmartHomeService, $rootScope) {
    var vm = this;
    vm.backyardLightState = "off";
    vm.frontyardLightState = "off";
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

    $rootScope.$on('switchBackyardLights', function (event, newLightState) {
      vm.backyardLightState = newLightState;
    })

    $rootScope.$on('switchFrontyardLights', function (event, newLightState) {
      vm.frontyardLightState = newLightState;
    })
  }
]);