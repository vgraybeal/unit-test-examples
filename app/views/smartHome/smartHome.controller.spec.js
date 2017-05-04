'use strict';

describe('SmartHomeCtrl', function(){

    var vm;
    var SmartHomeService;

    beforeEach(module('myApp.smartHome'));

    beforeEach(inject(function ($controller, _SmartHomeService_) {
        SmartHomeService = _SmartHomeService_;
        vm = $controller('SmartHomeCtrl', {
            SmartHomeService: SmartHomeService
        });
    }));

    // NON-UNIT TESTS - SOLUTION: MOCK DEPENDENCIES
    describe('displayTimeOfDay()', function() {
        var $rootScope;

        describe('at 6 AM', function() {
            it('should set timeOfDay to Morning', function () {
                spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Morning');
                vm.displayTimeOfDay();

                expect(vm.timeOfDay).toBe('Morning');
            })
        });
        describe('at 1 PM', function() {
            it('should set timeOfDay to Afternoon', function () {
                spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Afternoon');
                vm.displayTimeOfDay();

                expect(vm.timeOfDay).toBe('Afternoon');
            })
        });
        describe('at 10 PM', function() {
            it('should set timeOfDay to Night', function () {
                spyOn(SmartHomeService, 'getTimeOfDay').and.returnValue('Night');
                vm.displayTimeOfDay();

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