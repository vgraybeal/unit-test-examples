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


    describe('toggleLights()', function () {

        // MISSING INVALID CASE - SOLUTION: MOCK INVALID CASE
        describe('when lights are in an invalid state', function() {
            beforeEach(function () {
                spyOn(BackyardLightService, 'getLightState').and.returnValue('invalid');
                spyOn(BackyardLightService, 'turnLightsOff');
            });

            it('should call turnLightsOff()', function () {
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOff).toHaveBeenCalled();
            })
        });


        // NON-INDEPENDENT TESTS - SOLUTION: SPLIT TESTS UP AND MOCK STATES
        describe('when lights are on', function() {
            beforeEach(function () {
                spyOn(BackyardLightService, 'getLightState').and.returnValue('on');
                spyOn(BackyardLightService, 'turnLightsOff');
            });

            it('should call turnLightsOff()', function () {
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOff).toHaveBeenCalled();
            })
        });

        describe('when lights are off', function() {
            beforeEach(function () {
                spyOn(BackyardLightService, 'getLightState').and.returnValue('off');
                spyOn(BackyardLightService, 'turnLightsOn');
            });

            it('should call turnLightsOn()', function () {
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOn).toHaveBeenCalled();
            })
        });
    });

});