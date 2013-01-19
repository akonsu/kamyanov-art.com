/* -*- mode:javascript; coding:utf-8; -*- */

'use strict';

(angular
 .module('app.controllers', ['ng', 'app.services'])
 .controller('indexController', [
     /******/ '$scope',
     function ($scope) {
         $scope.caption = 'Игорь Камянов';
         $scope.sections = [
             'биография',
             'работы',
             'выставки',
             'тексты',
             'публикации',
             'контакты'
         ];
     }
 ])
);
