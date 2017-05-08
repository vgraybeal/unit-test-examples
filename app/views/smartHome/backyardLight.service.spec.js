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

        // MISSING INVALID CASE


        // NON-INDEPENDENT TESTS
        describe('when toggleLights() is called twice', function() {
            it('should call turnLightsOn() then turnLightsOff()', function () {
                spyOn(BackyardLightService, 'turnLightsOn').and.callThrough();
                spyOn(BackyardLightService, 'turnLightsOff').and.callThrough();
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOn).toHaveBeenCalled();
                BackyardLightService.toggleLights();
                expect(BackyardLightService.turnLightsOff).toHaveBeenCalled();
            })
        });
    });

});