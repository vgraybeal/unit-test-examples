'use strict';

angular.module('myApp.smartHome')

  .service('SmartHomeService', ['LightService',
    function (LightService) {
      var lastMotionTime;

      this.getTimeOfDay = function () {
        var time = new Date();
        var hour = time.getHours();

        if (hour >= 0 && hour < 6 || hour > 18) {
          return "Night";
        }
        if (hour >= 6 && hour < 12) {
          return "Morning";
        }
        if (hour >= 12 && hour < 18) {
          return "Afternoon";
        }
      }

      this.actuateLights = function () {
        var timeOfDay = this.getTimeOfDay();

        // If motion was detected in the evening or at night, turn the light on.
        if (timeOfDay === "Night") {
          LightService.turnLightsOn();
        }
        // If no motion is detected for one minute, or if it is morning or day, turn the light off.
        else if (timeOfDay == "Morning" || timeOfDay == "Afternoon") {
          LightService.turnLightsOff();
        }
      }

      this.toggleLights = function () {
        if (LightService.getLightState() === "off") {
          LightService.turnLightsOn();
        }
        else if (LightService.getLightState() === "on") {
          LightService.turnLightsOff();
        }
      }

    }
  ]);