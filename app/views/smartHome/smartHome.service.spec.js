'use strict';

describe('SmartHomeService', function() {

  var SmartHomeService;
  beforeEach(module('myApp.smartHome'));

  beforeEach(inject(function (_SmartHomeService_) {
    SmartHomeService = _SmartHomeService_;
  }));

  // NON-DETERMINISTIC TESTS
  describe('getTimeOfDay()', function() {
    describe('at 6 AM', function() {
      it('should return Morning', function () {
        expect(SmartHomeService.getTimeOfDay()).toBe('Morning');
      })
    });

    describe('at 12 PM', function() {
      it('should return Afternoon', function () {
        expect(SmartHomeService.getTimeOfDay()).toBe('Afternoon');
      })
    });

    describe('at 10 PM', function() {
      it('should return Night', function () {
        expect(SmartHomeService.getTimeOfDay()).toBe('Night');
      })
    });
  });

});