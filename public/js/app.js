/* -*- mode:javascript; coding:utf-8; -*- */

'use strict';

(angular
 .module('app', ['ng', 'ngSanitize', 'app.controllers'])
 .config([
     /******/ '$routeProvider',
     function ($routeProvider) {
         $routeProvider
             .when('/', {templateUrl: '/templates/index.html', controller: 'indexController'})
             .otherwise({redirectTo: '/'});
     }])
 .run([
     /******/ '$rootScope', '$location',
     function ($rootScope,   $location) {
         $rootScope.location = $location
     }])
);
