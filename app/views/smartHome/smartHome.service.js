'use strict';

angular.module('myApp.smartHome')

  .service('SmartHomeService', ['DateTimeService',
    function (DateTimeService) {
      var lastMotionTime;

      this.getTimeOfDay = function () {
        var time = DateTimeService.getDateTime();
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

      this.actuateLights = function (turnLightsOn, turnLightsOff) {
        var timeOfDay = this.getTimeOfDay(DateTimeService.getDateTime());

        // If motion was detected in the evening or at night, turn the light on.
        if (timeOfDay === "Night") {
          turnLightsOn();
        }
        // If no motion is detected for one minute, or if it is morning or day, turn the light off.
        else if (timeOfDay == "Morning" || timeOfDay == "Afternoon") {
          turnLightsOff();
        }
      }

    }
  ]);