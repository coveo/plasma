import { createStore, Store } from 'redux';
import { IReactVaporStore, Reducers } from './Reducers';

export const ReactVaporStore: Store<IReactVaporStore> =
  createStore<IReactVaporStore>(Reducers, (<any>window).devToolsExtension && (<any>window).devToolsExtension.call());
