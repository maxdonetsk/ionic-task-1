'use strict';

angular
        .module('books')
        .factory('Books', Books);

function Books($http, $q, BaseURL) {

    return  {
        getAll: getAll,
        getOne: getOne
    };

    function getAll() {
        var deferred = $q.defer();

        var url = BaseURL + 'books';

        $http.get(url)
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (error) {
                    deferred.resolve(error);
                });
        return deferred.promise;
    }

    function getOne(id) {
        var deferred = $q.defer();

        var url = BaseURL + 'book/' + id;

        $http.get(url)
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (error) {
                    deferred.resolve(error);
                });
        return deferred.promise;
    }
}