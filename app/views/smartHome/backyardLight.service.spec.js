'use strict';

describe('BackyardLightService', function () {

    var BackyardLightService;
    beforeEach(module('myApp.smartHome'));

    beforeEach(inject(function (_BackyardLightService_) {
        BackyardLightService = _BackyardLightService_;
    }));

    // DECENT TESTS
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

    // MISSING INVALID CASE
    describe('toggleLights()', function () {
        describe('when lights are off', function () {
            it('should call turnLightsOn()', function () {
                spyOn(BackyardLightService, 'turnLightsOn');
                spyOn(BackyardLightService, 'getLightState').and.returnValue('off');
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOn).toHaveBeenCalled();
            });
        });
        describe('when lights are on', function () {
            it('should call turnLightsOff()', function () {
                spyOn(BackyardLightService, 'turnLightsOff');
                spyOn(BackyardLightService, 'getLightState').and.returnValue('on');
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOff).toHaveBeenCalled();
            });
        });
    });

});