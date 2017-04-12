'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    var view1Ctrl;

    beforeEach(inject(function ($controller, $rootScope) {
      var $scope = $rootScope.$new();
      view1Ctrl = $controller('View1Ctrl', {
        $scope: $scope
      });
    }));


    it('should update time of day to night', function () {
      view1Ctrl.updateTimeOfDayDisplay()

      expect(view1Ctrl.timeOfDayMessage).toBe('Night');
    })

    it('should update time of day to morning', function () {
      view1Ctrl.updateTimeOfDayDisplay()

      expect(view1Ctrl.timeOfDayMessage).toBe('Morning');
    })

    it('should update time of day to afternoon', function () {
      view1Ctrl.updateTimeOfDayDisplay();

      expect(view1Ctrl.timeOfDayMessage).toBe('Afternoon');
    })

  });
});