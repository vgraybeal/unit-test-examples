'use strict';

angular.module('myApp.smartHome')


.service('BackyardLightService', ['$rootScope',
  function($rootScope) {
    var lightState = "off";

    this.getLightState = function () {
      return lightState;
    }

    this.turnLightsOn = function () {
      lightState = "on";
      $rootScope.$broadcast("switchBackyardLights", lightState);
    }

    this.turnLightsOff = function () {
      lightState = "off";
      $rootScope.$broadcast("switchBackyardLights", lightState);
    }

    this.toggleLights = function () {
      if (this.getLightState() === "off") {
        this.turnLightsOn();
      }
      else if (this.getLightState() === "on") {
        this.turnLightsOff();
      }
    }

  }
]);