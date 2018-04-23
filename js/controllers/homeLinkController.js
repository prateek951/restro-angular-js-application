'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * homeLinkController of the Application
 */

 app.controller('homeLinkController',function($scope){

    $scope.links = [
        {
            homelink : '#/index-1',
            hometitle : 'Home 1'
        },
        {
            homelink : '#/index-2',
            hometitle : 'Home 2'
        }
    ]

 });