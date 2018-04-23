'use strict';

/**
 * @ngdoc overview
 * @name restroApp
 * @description
 * # restroApp
 *
 * foodController of the Application
 */
app.controller('foodController',($scope,JSONFactory,foodsUrl) => {

    var promise = JSONFactory.serverCall(foodsUrl);

    promise.then(data => {
        console.log(data);
    },err => console.log('an error has occured while fetching the data from the server'));

});



