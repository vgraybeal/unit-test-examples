'use strict';

angular.module('myApp.timeOfDay')


.service('LightService', ['$rootScope',
  function($rootScope) {
    var lightState = "off";

    this.getLightState = function () {
      return lightState;
    }

    this.turnLightsOn = function () {
      lightState = "on";
      $rootScope.$broadcast("switchLights", lightState);
    }

    this.turnLightsOff = function () {
      lightState = "off";
      $rootScope.$broadcast("switchLights", lightState);
    }

  }
]);