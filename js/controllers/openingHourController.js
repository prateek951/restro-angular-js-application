'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * openingHourController of the Application
 */

 app.controller('openingHourController',function($scope){

    $scope.title = 'Opening Hour';
    $scope.hours = [
        {
            day : 'Monday',
            interval : '09 am - 10 pm'
        },
        {
            day : 'Tuesday',
            interval : '09 am - 10 pm'
        },
        {
            day : 'Wednesday',
            interval : '09 am - 10 pm'
        },
        {
            day : 'Thursday',
            interval : '09 am - 10 pm'
        },
        {
            day : 'Friday',
            interval : '08 pm - 10 pm'
        },
        {
            day : 'Saturday',
            interval : '08 am - 9pm'
        },
        {
            day : 'Sunday',
            interval : 'Closed'
        }
    ]
 });
