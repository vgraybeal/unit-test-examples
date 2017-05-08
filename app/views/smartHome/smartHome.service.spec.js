'use strict';

describe('SmartHomeService', function() {

  var SmartHomeService;
  var DateTimeService;
  beforeEach(module('myApp.smartHome'));

  beforeEach(inject(function (_SmartHomeService_, _DateTimeService_) {
    SmartHomeService = _SmartHomeService_;
    DateTimeService = _DateTimeService_;
  }));

  // NON-DETERMINISTIC TESTS - SOLUTION: DEPENDENCY INJECTION
  describe('getTimeOfDay()', function() {
    describe('at 6 AM', function() {
      it('should return Morning', function () {
        spyOn(DateTimeService, "getDateTime").and.returnValue(new Date('2017-01-01 06:00'))
        expect(SmartHomeService.getTimeOfDay()).toBe('Morning');
      })
    });

    describe('at 12 PM', function() {
      it('should return Afternoon', function () {
        spyOn(DateTimeService, "getDateTime").and.returnValue(new Date('2017-01-01 12:00'))
        expect(SmartHomeService.getTimeOfDay()).toBe('Afternoon');
      })
    });

    describe('at 10 PM', function() {
      it('should return Night', function () {
        spyOn(DateTimeService, "getDateTime").and.returnValue(new Date('2017-01-01 22:00'))
        expect(SmartHomeService.getTimeOfDay()).toBe('Night');
      })
    });
  });


  // UNNECESSARY ASSERTION - SOLUTION: REMOVE ASSERTION
  describe('actuateLights()', function() {
    var TestLightService;

    beforeEach(function () {
        TestLightService = jasmine.createSpyObj('TestLightService', ['turnLightsOn', 'turnLightsOff']);
    });

    describe('in the Morning', function() {
      it('should call turnLightsOff()', function () {
        spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Morning');
        SmartHomeService.actuateLights(TestLightService.turnLightsOn, TestLightService.turnLightsOff);
        expect(TestLightService.turnLightsOff).toHaveBeenCalled();
      })
    });

    describe('in the Afternoon', function() {
      it('should call turnLightsOff()', function () {
        spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Afternoon');
        SmartHomeService.actuateLights(TestLightService.turnLightsOn, TestLightService.turnLightsOff);
        expect(TestLightService.turnLightsOff).toHaveBeenCalled();
      })
    });

    describe('at Night', function() {
      it('should call turnLightsOn()', function () {
        spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Night');
        SmartHomeService.actuateLights(TestLightService.turnLightsOn, TestLightService.turnLightsOff);
        expect(TestLightService.turnLightsOn).toHaveBeenCalled();
      })
    });
  });

});