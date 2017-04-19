'use strict';

describe('myApp.timeOfDay module', function() {

  beforeEach(module('myApp.timeOfDay'));

  describe('timeOfDay controller', function(){
    var TimeOfDayCtrl;

    beforeEach(inject(function ($controller, $rootScope) {
      var $scope = $rootScope.$new();
      TimeOfDayCtrl = $controller('TimeOfDayCtrl', {
        $scope: $scope
      });
    }));


    it('should update time of day to night', function () {
      TimeOfDayCtrl.updateTimeOfDayDisplay()

      expect(TimeOfDayCtrl.timeOfDayMessage).toBe('Night');
    })

    it('should update time of day to morning', function () {
      TimeOfDayCtrl.updateTimeOfDayDisplay()

      expect(TimeOfDayCtrl.timeOfDayMessage).toBe('Morning');
    })

    it('should update time of day to afternoon', function () {
      TimeOfDayCtrl.updateTimeOfDayDisplay();

      expect(TimeOfDayCtrl.timeOfDayMessage).toBe('Afternoon');
    })

  });
});