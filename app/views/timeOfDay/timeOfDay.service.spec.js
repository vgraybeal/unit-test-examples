'use strict';

describe('myApp.timeOfDay module', function() {

  beforeEach(module('myApp.timeOfDay'));

  describe('TimeOfDayService', function(){
    var TimeOfDayService;

    beforeEach(inject(function (_TimeOfDayService_) {
      TimeOfDayService = _TimeOfDayService_;
    }));

    describe('at 6 AM', function() {
      it('should return Morning', function () {
        expect(TimeOfDayService.getTimeOfDay()).toBe('Morning');
      })
    });

    describe('at 12 PM', function() {
      it('should return Afternoon', function () {
        expect(TimeOfDayService.getTimeOfDay()).toBe('Afternoon');
      })
    });

    describe('at 10 PM', function() {
      it('should return Night', function () {
        expect(TimeOfDayService.getTimeOfDay()).toBe('Night');
      })
    });

  });
});