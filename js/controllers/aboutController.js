'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * AboutController of the Application
 */

 app.controller('aboutController',function($scope){

    $scope.contacts = [
        {
            link: '#/contact-us',
            head: 'contact-us 1'
        },
        {
            link : '#/contact-us2',
            head : 'contact-us 2'
        }
    ];

 });