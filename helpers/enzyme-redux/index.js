import * as React from 'react';
import * as enzyme from 'enzyme';
import {Provider} from 'react-redux';

export const shallowWithStore = (Component, store) => {
    const ReactReduxComponent = React.cloneElement(Component, {store}, null);
    return enzyme.shallow(ReactReduxComponent);
};

export const mountWithStore = (Component, store, withContext = true) => {
    const ComponentAlreadyWithProvider = React.cloneElement(Component, {store}, null);
    const ReactReduxComponent = React.createElement(Provider, {store}, Component);
    return enzyme.mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};

export const shallowWithState = (Component, state) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };
    const ReactReduxComponent = React.cloneElement(Component, {store}, null);
    return enzyme.shallow(ReactReduxComponent);
};

export const mountWithState = (Component, state, withContext = true) => {
    const store = {
        getState: () => state,
        subscribe: () => ({}),
        dispatch: () => ({}),
    };
    const ComponentAlreadyWithProvider = React.cloneElement(Component, {store}, null);
    const ReactReduxComponent = React.createElement(Provider, {store}, Component);
    return enzyme.mount(withContext ? ComponentAlreadyWithProvider : ReactReduxComponent);
};

export * from 'enzyme';
