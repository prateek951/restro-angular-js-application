app.factory('JSONFactory',($http,$q) => {

    var factoryObject = {
        serverCall(url) {
            var deferred = $q.defer();
            $http.get(url).then(data => deferred.resolve(data),err => deferred.reject(err));
            return deferred.promise;
        }
        
    }
    return factoryObject;
})



