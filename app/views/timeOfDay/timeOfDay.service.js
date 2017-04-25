'use strict';

angular.module('myApp.timeOfDay')


.service('TimeOfDayService', ['LightService',
  function(LightService) {
    var lastMotionTime;


    this.getTimeOfDay = function () {
      var time = new Date();
      var hour = time.getHours();

      if (hour >= 0 && hour < 6 || hour > 18)
      {
          return "Night";
      }
      if (hour >= 6 && hour < 12)
      {
          return "Morning";
      }
      if (hour >= 12 && hour < 18)
      {
          return "Afternoon";
      }
    }

    this.actuateLights = function (motionDetected) {
      if (motionDetected) {
        lastMotionTime = new Date();
      }

      var diffMs = (new Date() - lastMotionTime);
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
      var timeOfDay = this.getTimeOfDay();

      // If motion was detected in the evening or at night, turn the light on.
      if (motionDetected && (timeOfDay === "Night")) {
        LightService.turnLightsOn();
      } 
      // If no motion is detected for one minute, or if it is morning or day, turn the light off.
      else if (diffMins > 1 || (timeOfDay == "Morning" || timeOfDay == "Afternoon"))
      {
        LightService.turnLightsOff();   
      }
    }

  }
]);