'use strict';

angular.module('books')

        .config(function ($stateProvider) {
            $stateProvider

                    .state('app.books', {
                        url: '/books',
                        views: {
                            'menuContent': {
                                templateUrl: 'js/books/books.html',
                                controller: 'BooksController',
                                controllerAs: 'vm'
                            }
                        }
                    });
        });