import { createStore, Store } from 'redux';
import { IReactVaporState, Reducers } from './Reducers';

export const ReactVaporStore: Store<IReactVaporState> =
  createStore<IReactVaporState>(Reducers, (<any>window).devToolsExtension && (<any>window).devToolsExtension.call());
