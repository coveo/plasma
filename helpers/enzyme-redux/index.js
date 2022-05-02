import * as enzyme from 'enzyme';
import {cloneElement, createElement} from 'react';
import {Provider} from 'react-redux';

export const shallowWithStore = (Component, store) => {
    const ReactReduxComponent = cloneElement(Component, {store}, null);
    return enzyme.shallow(ReactReduxComponent);
};

export const mountWithStore = (Component, store, withContext = true) => {
    const ComponentAlreadyWithProvider = cloneElement(Component, {store}, null);
    const ReactReduxComponent = createElement(Provider, {store}, Component);
    return enzyme.mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};

export const shallowWithState = (Component, state) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };
    const ReactReduxComponent = cloneElement(Component, {store}, null);
    return enzyme.shallow(ReactReduxComponent);
};

export const mountWithState = (Component, state, withContext = true) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };
    const ComponentAlreadyWithProvider = cloneElement(Component, {store}, null);
    const ReactReduxComponent = createElement(Provider, {store}, Component);
    return enzyme.mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};
