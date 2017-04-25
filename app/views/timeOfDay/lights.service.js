'use strict';

angular.module('myApp.timeOfDay')


.service('LightService', ['$rootScope',
  function($rootScope) {

    this.turnLightsOn = function () {
      $rootScope.$broadcast("switchLights", "on");
    }

    this.turnLightsOff = function () {
      $rootScope.$broadcast("switchLights", "off");
    }

  }
]);