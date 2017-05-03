'use strict';

describe('BackyardLightService', function () {

    var BackyardLightService;
    beforeEach(module('myApp.smartHome'));

    beforeEach(inject(function (_BackyardLightService_) {
        BackyardLightService = _BackyardLightService_;
    }));

    // GOOD TESTS
    describe('turnLightsOn()', function () {
        it('should set light state to on', function () {
            BackyardLightService.turnLightsOn();
            expect(BackyardLightService.getLightState()).toBe('on');
        });
    });

    describe('turnLightsOff()', function () {
        it('should set light state to off', function () {
            BackyardLightService.turnLightsOff();
            expect(BackyardLightService.getLightState()).toBe('off');
        });
    });

});