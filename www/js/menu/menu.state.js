'use strict';

angular.module('books')

        .config(function ($stateProvider) {
            $stateProvider
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'js/menu/menu.html',
                        controller: 'MenuController',
                        controllerAs: 'vm'
                    });
        });
