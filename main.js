/* eslint-disable no-unused-vars */

import "core-js/stable";
import "regenerator-runtime/runtime";

// Import all css
import './src/app.scss';

// Import library 
import * as jquery from "jquery";
import * as angular from "angular";
import * as router from "@uirouter/angularjs";

// Import application files 
import './src/app';
import './src/routes';

// Import Directive
import "./src/directives/react-page.directive";
import "./src/directives/manage-todo.directive";

// Import controller
import "./src/modules/layout/footer.controller";
import './src/modules/todo/todo.controller'; 