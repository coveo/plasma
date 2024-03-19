import {IDispatch, PlasmaReducers, PlasmaState} from '@coveord/plasma-react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middlewares = [thunk, promise];

const composeEnhancers = composeWithDevTools({name: 'Plasma Design System'});

const saveToSessionStorage = (state: PlasmaState) => {
    try {
        sessionStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        // do nothing
    }
};

const loadFromSessionStorage = () => {
    try {
        const stateStr = sessionStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        return undefined;
    }
};

const persistedState =
    process.env.NODE_ENV === 'development' && (globalThis as any)?.loaded ? loadFromSessionStorage() : undefined;

export const Store = createStore(
    combineReducers(PlasmaReducers),
    persistedState,
    composeEnhancers(applyMiddleware<IDispatch>(...middlewares)),
);

if (process.env.NODE_ENV === 'development') {
    Store.subscribe(() => {
        saveToSessionStorage(Store.getState());
    });
}
