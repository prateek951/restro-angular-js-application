'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * menuController of the Application
 */

 app.controller('menuController',function($scope){

    $scope.menus= [
        {
            menulink : '#/menu',
            menutitle : 'menu 1'
        },
        {
            menulink : '#/menu2',
            menutitle : 'menu 2'
        },
        {
            menulink : '#/menu3',
            menutitle : 'menu 3'
        },
    ]

 });