'use strict';

angular.module('books', ['ionic', 'ngSanitize'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .constant('BaseURL', 'http://vanilla.dev.htmlcms.me/')

        .config(function ($urlRouterProvider) {
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/books');
        });