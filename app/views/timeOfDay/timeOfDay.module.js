'use strict';

angular.module('myApp.timeOfDay', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/timeOfDay', {
    templateUrl: 'views/timeOfDay/smartHome.html',
    controller: 'SmartHomeCtrl',
    controllerAs: 'vm'
  });
}])