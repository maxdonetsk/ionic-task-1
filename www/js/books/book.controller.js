'use strict';

angular.module('books')

        .controller('BookController', BookController);

function BookController(Books, $state, $sce) {
    var vm = this;

    vm.loading = true;
    vm.error = null;

    if (angular.isDefined($state.params.bookId)) {
        Books.getOne($state.params.bookId)
                .then(function (response) {
                    vm.book = response.data[0];
                    vm.book.html = $sce.trustAsHtml(vm.book.body);
                })
                .catch(function (error) {
                    vm.error = JSON.stringify(error);
                })
                .finally(function () {
                    vm.loading = false;
                });
    } else {
        $state.go('app.books');
    }
}