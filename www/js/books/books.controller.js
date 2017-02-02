'use strict';

angular.module('books')

        .controller('BooksController', BooksController);

function BooksController(Books, $state) {
    var vm = this;

    vm.loading = true;
    vm.error = null;

    vm.showBook = showBook;

    Books.getAll()
            .then(function (response) {
                vm.books = response.data;
            })
            .catch(function (error) {
                vm.error = JSON.stringify(error);
            })
            .finally(function () {
                vm.loading = false;
            });

    function showBook(id) {
        $state.go('app.book', {bookId: id});
    }
}