'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import getReactComponentInstance from '../react-components/react.utils';

const reactDirective = angular.module('demoApp')
    .directive('reactPage', () => ({
        template: '<div id="{{id}}" class="react-page"></div>',
        scope: {
            id: '@',
            page: '@',
            props: '='
        },
        link(scope) {

            function renderComponent() {
                const reactApp = document.getElementById(scope.id);
                const ComponentIns = getReactComponentInstance(scope.page);
                if (reactApp && ComponentIns) {
                    ReactDOM.render(
                        <Router>
                            <ComponentIns />
                        </Router>,
                        reactApp,
                    );
                }
            }

            renderComponent();

            // handle theme change
            window.addEventListener("themeChange", () => {
                renderComponent();
            }, false);
        },
    }));

export default reactDirective;
