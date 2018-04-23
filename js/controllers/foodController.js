'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * foodController of the Application
 */
app.controller('foodController',function($scope,JSONFactory,foodsUrl) {

    var promise = JSONFactory.serverCall(foodsUrl);

    promise.then(data => {
        $scope.result = data.data
    },err => console.log('an error has occured while fetching the data from the server'));

});



