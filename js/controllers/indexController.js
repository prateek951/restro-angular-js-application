'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * IndexController of the Application
 */

app.controller("indexController", function($scope, JSONFactory, socialUrl){
    var promise = JSONFactory.serverCall(socialUrl);
    promise.then(data=>{
        var SocialData = data;
        $scope.result = SocialData.data;
    },err=> console.log("error has occured in controller"));
});