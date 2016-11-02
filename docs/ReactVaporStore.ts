import { createStore, Store } from 'redux';
import { IReactVaporExampleState, Reducers } from './Reducers';

export const ReactVaporStore: Store<IReactVaporExampleState> =
  createStore<IReactVaporExampleState>(Reducers, (<any>window).devToolsExtension && (<any>window).devToolsExtension.call());
