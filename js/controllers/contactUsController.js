'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * contactUsController of the Application
 */

 app.controlller('contactController',function($scope){
    $scope.title = 'Contact Us';
    $scope.detail = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean ac.';
    $scope.contact = {
        telephone : '+123 55 33 444 888',
        email : 'Help@pearl.com',
        location : '329 Queensberry Street, North Me bourne, Australia.'
    }


 });


