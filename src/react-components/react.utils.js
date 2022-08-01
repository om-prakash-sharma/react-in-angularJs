'use strict';

import ManageTodo from "./manage-todo";
import Login from "./login";

const getReactComponentInstance = (pageName) => {
    const componentIns = null;
    if (pageName) {
        switch (pageName.toLowerCase()) {
            case 'user-login':
                return Login;

            case 'manage-todo':
                return ManageTodo;

            default: break;
        }
    }
    return componentIns;
};

export default getReactComponentInstance;
