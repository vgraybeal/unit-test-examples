'use strict';

describe('SmartHomeCtrl', function(){

    var vm;
    beforeEach(module('myApp.timeOfDay'));

    beforeEach(inject(function ($controller) {
        vm = $controller('SmartHomeCtrl', {});
    }));

    // NON-UNIT TESTS
    describe('displayTimeOfDay()', function() {
        describe('at 6 AM', function() {
            it('should set timeOfDay to Morning', function () {
                vm.displayTimeOfDay()

                expect(vm.timeOfDay).toBe('Morning');
            })
        });
    });

    // TESTING DEPENDENCIES
    describe('on switchLights', function() {

        var LightService;

        beforeEach(inject(function (_LightService_) {
            LightService = _LightService_;
        }));

        describe('when switches on', function() {
            it('should set lightsState to "on"', function () {
                LightService.turnLightsOn();

                expect(vm.lightsState).toBe('on');
            })
        });

        describe('when switches off', function() {
            it('should set lightsState to "off"', function () {
                LightService.turnLightsOff();

                expect(vm.lightsState).toBe('off');
            })
        });
    });

});