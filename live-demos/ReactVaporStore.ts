import { IReactVaporExampleState, Reducers } from './Reducers';
import * as Redux from 'redux';
import thunk from 'redux-thunk';


export const ReactVaporStore: Redux.Store<IReactVaporExampleState> =
  Redux.createStore<IReactVaporExampleState>(Reducers, (<any>window).devToolsExtension && (<any>window).devToolsExtension.call(), Redux.applyMiddleware(thunk));
