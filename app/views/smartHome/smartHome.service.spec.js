'use strict';

describe('SmartHomeService', function() {

  var SmartHomeService;
  var BackyardLightService;
  beforeEach(module('myApp.smartHome'));

  beforeEach(inject(function (_BackyardLightService_, _SmartHomeService_) {
    BackyardLightService = _BackyardLightService_;
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


  // UNNECESSARY ASSERTION
  describe('actuateLights()', function() {
    beforeEach(function () {
        spyOn(BackyardLightService, 'turnLightsOff');
        spyOn(BackyardLightService, 'turnLightsOn');
    });

    describe('in the Morning', function() {
      it('should call turnLightsOff()', function () {
        spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Morning');
        SmartHomeService.actuateLights();
        expect(SmartHomeService.getTimeOfDay).toHaveBeenCalled();
        expect(BackyardLightService.turnLightsOff).toHaveBeenCalled();
      })
    });

    describe('in the Afternoon', function() {
      it('should call turnLightsOff()', function () {
        spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Afternoon');
        SmartHomeService.actuateLights();
        expect(SmartHomeService.getTimeOfDay).toHaveBeenCalled();
        expect(BackyardLightService.turnLightsOff).toHaveBeenCalled();      
      })
    });

    describe('at Night', function() {
      it('should call turnLightsOn()', function () {
        spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Night');
        SmartHomeService.actuateLights();
        expect(SmartHomeService.getTimeOfDay).toHaveBeenCalled();
        expect(BackyardLightService.turnLightsOn).toHaveBeenCalled();       
      })
    });
  });

});