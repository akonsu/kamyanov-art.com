/* -*- mode:javascript; coding:utf-8; -*- */

'use strict';

(angular
 .module('app.controllers', ['ng', 'app.services'])
 .controller('indexContr', [
     /******/ '$scope',
     function ($scope) {
     }
 ])
 .controller('navContr', [
     /******/ '$scope', '$location',
     function ($scope,   $location) {
         $scope.caption = 'Игорь Камянов';
         $scope.sections = [
             {name: 'биография', url: 'biography'},
             {name: 'работы', url: 'works'},
             {name: 'выставки', url: 'exhibitions'},
             {name: 'тексты', url: 'texts'},
             {name: 'публикации', url: 'publications'},
             {name: 'контакты', url: 'contact'}
         ];
         $scope.is_root = function () {
             return $location.path() === '/';
         };
         $scope.section_active = function (section) {
             return section.url === $location.path().substring(1);
         };
     }
 ])
);
