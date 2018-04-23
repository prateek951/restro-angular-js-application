'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * blogController of the Application
 */

 app.controller('blogController',function($scope){

    $scope.blogs = [
        {
            bloglink : '#/blog',
            blogtitle : 'blog 1'
        },
        {
            bloglink : '#/blog2',
            blogtitle : 'blog 2'
        }
    ]
 });
