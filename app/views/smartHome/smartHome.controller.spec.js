'use strict';

describe('SmartHomeCtrl', function(){

    var vm;
    beforeEach(module('myApp.smartHome'));

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
    describe('when backyard light state changes', function() {

        var BackyardLightService;

        beforeEach(inject(function (_BackyardLightService_) {
            BackyardLightService = _BackyardLightService_;
        }));

        describe('if switches on', function() {
            it('should set lightsState to "on"', function () {
                BackyardLightService.turnLightsOn();

                expect(vm.backyardLightState).toBe('on');
            })
        });

        describe('if switches off', function() {
            it('should set lightsState to "off"', function () {
                BackyardLightService.turnLightsOff();

                expect(vm.backyardLightState).toBe('off');
            })
        });
    });

});