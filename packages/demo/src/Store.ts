import {IDispatch} from 'react-vapor';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import {IReactVaporExampleState, Reducers} from './Reducers';

const middlewares = [thunk, promise];

const composeEnhancers = composeWithDevTools({name: 'Vapor Design System'});

export const Store = createStore(
    Reducers,
    composeEnhancers(applyMiddleware<IDispatch<IReactVaporExampleState>>(...middlewares))
);
