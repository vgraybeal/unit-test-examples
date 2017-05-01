'use strict';

describe('SmartHomeService', function() {

  var SmartHomeService;
  var LightService;
  beforeEach(module('myApp.smartHome'));

  beforeEach(inject(function (_LightService_, _SmartHomeService_) {
    LightService = _LightService_;
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

  // NON-INDEPENDENT TESTS
  describe('toggleLights()', function() {
    describe('when toggleLights() is called twice', function() {
      it('should switch lights on, then switch lights off', function () {
        spyOn(LightService, 'turnLightsOn').and.callThrough();
        spyOn(LightService, 'turnLightsOff').and.callThrough();
        SmartHomeService.toggleLights();
        expect(LightService.turnLightsOn).toHaveBeenCalled();
        SmartHomeService.toggleLights();
        expect(LightService.turnLightsOff).toHaveBeenCalled();
      })
    });


  });

});