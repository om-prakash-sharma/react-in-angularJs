'use strict';

angular
    .module('demoApp')
    .controller('FooterCtrl', ['$scope', function ($scope) {

        $scope.currentYear = new Date().getFullYear();
    }]);