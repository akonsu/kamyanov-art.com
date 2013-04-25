/* -*- coding:utf-8; mode:javascript; -*- */

'use strict';

(angular
 .module('app', ['ng', 'ngSanitize', 'app.controllers'])
 .config([
     /******/ '$routeProvider',
     function ($routeProvider) {
         $routeProvider
             .when('/', {controller: 'indexContr'})
             .when('/biography', {templateUrl: '/templates/biography.html', controller: 'indexContr'})
             .when('/works', {templateUrl: '/templates/works.html', controller: 'indexContr'})
             .when('/exhibitions', {templateUrl: '/templates/exhibitions.html', controller: 'indexContr'})
             .when('/texts', {templateUrl: '/templates/texts.html', controller: 'indexContr'})
             .when('/publications', {templateUrl: '/templates/publications.html', controller: 'indexContr'})
             .when('/contact', {templateUrl: '/templates/contact.html', controller: 'indexContr'})
             .otherwise({redirectTo: '/'});
     }])
 .run([
     /******/ '$rootScope', '$location',
     function ($rootScope,   $location) {
         $rootScope.location = $location
     }])
);
