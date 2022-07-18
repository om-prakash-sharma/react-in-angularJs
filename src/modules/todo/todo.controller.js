'use strict';

angular
    .module('demoApp')
    .controller('TodoController', ['$scope', function ($scope) {

        $scope.title = "Manage Todo Using AngularJS";
        $scope.todo = {};
        $scope.todoList = [];
        $scope.addTodo = addTodoFn;
        $scope.editTodo = editTodoFn;
        $scope.updateTodo = updateTodoFn;
        $scope.deleteTodo = deleteTodoFn;

        function addTodoFn(todo) {
            $scope.todoList.push(todo);
            $scope.$applyAsync();
        }

        function editTodoFn(todo) {
            $scope.todo = todo;
            $scope.$applyAsync();
        }

        function updateTodoFn(todo) {
            const todoIndex = $scope.todoList.findIndex((item) => item.id === todo.id);
            $scope.todoList[todoIndex].text = todo.text;
            $scope.$applyAsync();
        }

        function deleteTodoFn(todoId) {
            const todoIndex = $scope.todoList.findIndex((item) => item.id === todoId);
            $scope.todoList.splice(todoIndex, 1);
            $scope.$applyAsync();
        }
    }]);