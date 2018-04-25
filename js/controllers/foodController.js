'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * foodController of the Application
 */
app.controller('foodController',function($scope,JSONFactory,foodsUrl){


    var promise = JSONFactory.serverCall(foodsUrl);

    promise.then(pass,fail);
    function pass(){
        console.log($scope.result);
        // $scope.result = data.data; 
    }
    function fail(){
        console.log('some error occured while fetching the data from the resource');
    }

});

