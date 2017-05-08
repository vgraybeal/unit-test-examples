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

    // TESTING DEPENDENCIES - SOLUTION: TEST ACTUAL BEHAVIOR OF UNIT
    describe('when backyard light state changes', function() {

        var $rootScope;

        beforeEach(inject(function (_$rootScope_) {
            $rootScope = _$rootScope_;
        }));

        describe('if switches on', function() {
            it('should set lightsState to "on"', function () {
                $rootScope.$broadcast('switchBackyardLights', 'on');

                expect(vm.backyardLightState).toBe('on');
            })
        });

        describe('if switches off', function() {
            it('should set lightsState to "off"', function () {
                $rootScope.$broadcast('switchBackyardLights', 'off');

                expect(vm.backyardLightState).toBe('off');
            })
        });
    });

});