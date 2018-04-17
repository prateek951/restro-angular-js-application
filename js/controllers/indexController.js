app.controller('indexController',function($scope,JSONFactory,socialURL){

    var promise = JSONFactory.serverCall(socialURL);

    promise.then(data => {
        $scope.result = data;
    },err => console.log('an error occured while fetching the data from the resource'));

});
