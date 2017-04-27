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
        describe('at 1 PM', function() {
            it('should set timeOfDay to Afternoon', function () {
                vm.displayTimeOfDay()

                expect(vm.timeOfDay).toBe('Afternoon');
            })
        });
        describe('at 10 PM', function() {
            it('should set timeOfDay to Night', function () {
                vm.displayTimeOfDay()

                expect(vm.timeOfDay).toBe('Night');
            })
        });
    });

    // TESTING DEPENDENCIES
    describe('when light state changes', function() {

        var LightService;

        beforeEach(inject(function (_LightService_) {
            LightService = _LightService_;
        }));

        describe('if switches on', function() {
            it('should set lightsState to "on"', function () {
                LightService.turnLightsOn();

                expect(vm.lightsState).toBe('on');
            })
        });

        describe('if switches off', function() {
            it('should set lightsState to "off"', function () {
                LightService.turnLightsOff();

                expect(vm.lightsState).toBe('off');
            })
        });
    });

});