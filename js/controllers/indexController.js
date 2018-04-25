'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * IndexController of the Application
 */

app.controller('indexController',function($scope,JSONFactory,socialUrl){


    var promise = JSONFactory.serverCall(socialUrl)

    promise.then(pass,fail);
    
    function pass(data){
        var social_data = data;
        $scope.result = social_data.data;
    }

    function fail(err){
        console.log('some error occured while fetching the data from the server');
    }


})