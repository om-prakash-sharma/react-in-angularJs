'use strict';

angular
    .module('demoApp', ['ui.router'])
    .run(($rootScope) => {
        // TODO: trigger when state change
        console.log('State changed', $rootScope);
    });