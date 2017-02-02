'use strict';

angular.module('books')

        .config(function ($stateProvider) {
            $stateProvider

                    .state('app.book', {
                        url: '/books/:bookId',
                        views: {
                            'menuContent': {
                                templateUrl: 'js/books/book.html',
                                controller: 'BookController',
                                controllerAs: 'vm'
                            }
                        }
                    });
        });