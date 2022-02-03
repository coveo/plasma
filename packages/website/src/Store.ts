import {IDispatch, PlasmaReducers} from '@coveord/plasma-react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const middlewares = [thunk, promise];

const composeEnhancers = composeWithDevTools({name: 'Plasma Design System'});

export const Store = createStore(
    combineReducers(PlasmaReducers),
    composeEnhancers(applyMiddleware<IDispatch>(...middlewares))
);

// Required for the dynamic examples
(window as any).Store = Store;
