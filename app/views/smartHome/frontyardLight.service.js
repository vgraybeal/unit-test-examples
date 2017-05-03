'use strict';

angular.module('myApp.smartHome')


.service('FrontyardLightService', ['$rootScope',
  function($rootScope) {
    var lightState = "off";

    this.getLightState = function () {
      return lightState;
    }

    this.turnLightsOn = function () {
      lightState = "on";
      $rootScope.$broadcast("switchFrontyardLights", lightState);
    }

    this.turnLightsOff = function () {
      lightState = "off";
      $rootScope.$broadcast("switchFrontyardLights", lightState);
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