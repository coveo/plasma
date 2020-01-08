import * as Redux from 'redux';
import thunk from 'redux-thunk';

import {IReduxAction} from '../src/utils/ReduxUtils';
import {ExamplesReducers, IReactVaporExampleState} from './Reducers';

// uncomment the line below for the redux logs to show in your chrome console
// import {createLogger} from 'redux-logger';
if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: 'React Vapor'});
}

export const ExamplesStore: Redux.Store<IReactVaporExampleState> = Redux.createStore<
    IReactVaporExampleState,
    IReduxAction,
    {},
    {}
>(
    ExamplesReducers,
    (window as any).devToolsExtension && (window as any).devToolsExtension.call(),
    Redux.applyMiddleware(
        thunk
        // uncomment the line below for the redux logs to show in your chrome console
        // createLogger(),
    )
);
