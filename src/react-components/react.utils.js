'use strict';

import ManageTodo from "./manage-todo";

const getReactComponentInstance = (pageName) => {
    const componentIns = null;
    if (pageName) {
        switch (pageName.toLowerCase()) {
            case 'manage-todo':
                return ManageTodo;

            default: break;
        }
    }
    return componentIns;
};

export default getReactComponentInstance;
