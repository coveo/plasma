import * as Redux from 'redux';
import thunk from 'redux-thunk';
import { IReactVaporExampleState, Reducers } from './Reducers';

export const ReactVaporStore: Redux.Store<IReactVaporExampleState> =
  Redux.createStore<IReactVaporExampleState>(Reducers, (window as any).devToolsExtension && (window as any).devToolsExtension.call(), Redux.applyMiddleware(thunk));
