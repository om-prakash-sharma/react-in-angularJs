'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import getReactComponentInstance from '../react-components/react.utils';

const reactDirective = angular.module('demoApp')
    .directive('manageTodo', () => ({
        template: '<div id="{{id}}" class="react-page"></div>',
        scope: {
            id: '@',
            page: '@',
            todo: '=',
            addTodo: '&',
            updateTodo: '&',
        },
        link(scope) {

            function renderComponent() {
                const reactApp = document.getElementById(scope.id);
                const ComponentIns = getReactComponentInstance(scope.page);
                if (reactApp && ComponentIns) {
                    scope.$watchGroup(['todo'], () => {
                        ReactDOM.render(<ComponentIns todo={scope.todo} addTodo={scope.addTodo()} updateTodo={scope.updateTodo()} />, reactApp);
                    }, true);
                }
            }

            renderComponent();
        }
    }));

export default reactDirective;
