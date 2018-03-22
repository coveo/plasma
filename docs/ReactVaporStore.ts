import * as Redux from 'redux';
// uncomment the line below for the redux logs to show in your chrome console
// import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {IReactVaporExampleState, Reducers} from './Reducers';

if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({name: 'React Vapor'});
}

export const ReactVaporStore: Redux.Store<IReactVaporExampleState> =
    Redux.createStore<IReactVaporExampleState>(
        Reducers,
        (window as any).devToolsExtension && (window as any).devToolsExtension.call(),
        Redux.applyMiddleware(
            thunk,
            // uncomment the line below for the redux logs to show in your chrome console
            // createLogger(),
        ),
    );
