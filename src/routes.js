'use strict';

angular
    .module('demoApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider',
        ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) => {

            // Code to resolve trailing slash in html5 mode starts here
            $urlMatcherFactoryProvider.strictMode(false);

            $stateProvider
                .state('index', {
                    url: '/',
                    abstract: true,
                    templateUrl: 'src/modules/layout/layout.html'
                })
                .state('index.todo', {
                    url: 'todo',
                    templateUrl: 'src/modules/todo/todo.html',
                    controller: 'TodoController',
                    data: {
                        pageTitle: 'Todo List',
                    }
                })
                .state('index.login', {
                    url: 'login',
                    template: '<react-page id="user-login" page="user-login"></react-page>',
                    data: {
                        pageTitle: 'Login'
                    }
                });

            // Code to configure html5 mode in client side starts here
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            // if route not found then redirect to /todo
            $urlRouterProvider.otherwise('/login');
        }]);
