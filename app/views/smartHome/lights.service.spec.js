'use strict';

describe('LightService', function () {

    var LightService;
    beforeEach(module('myApp.smartHome'));

    beforeEach(inject(function (_LightService_) {
        LightService = _LightService_;
    }));

    // GOOD TESTS
    describe('turnLightsOn()', function () {
        it('should set light state to on', function () {
            LightService.turnLightsOn();
            expect(LightService.getLightState()).toBe('on');
        });
    });

    describe('turnLightsOff()', function () {
        it('should set light state to off', function () {
            LightService.turnLightsOff();
            expect(LightService.getLightState()).toBe('off');
        });
    });

});