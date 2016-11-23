import * as Redux from 'redux';
import { IReactVaporExampleState, Reducers } from './Reducers';

export const ReactVaporStore: Redux.Store<IReactVaporExampleState> =
  Redux.createStore<IReactVaporExampleState>(Reducers, (<any>window).devToolsExtension && (<any>window).devToolsExtension.call());
