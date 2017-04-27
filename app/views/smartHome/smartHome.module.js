'use strict';

angular.module('myApp.smartHome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/smartHome', {
    templateUrl: 'views/smartHome/smartHome.html',
    controller: 'SmartHomeCtrl',
    controllerAs: 'vm'
  });
}])