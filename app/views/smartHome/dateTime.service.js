'use strict';

angular.module('myApp.smartHome')

  .service('DateTimeService', [
    function () {

      // Inversion Of Control
      // * Decouple execution of task from implementation
      // * Frees module from assumptions about how other systems work and instead rely on contarcts
      // * "Don't Call us, we'll call you"
      // Specifically - Dependency Injection
      // * One object provides dependencies of another object

      this.getDateTime = function () {
        return new Date();
      }


    }
  ]);