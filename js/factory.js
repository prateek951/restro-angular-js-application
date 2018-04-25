app.factory('JSONFactory',function($http,$q){

    var factoryObject = {
        serverCall: function(url) {
            var deferred = $q.defer();
            $http.get(url).then(pass,fail);
            function pass(data){
                deferred.resolve(data);
            }
            function fail(err){
                deferred.reject(err);
            }
            return deferred.promise;
        }
        
    }
    return factoryObject;
})

