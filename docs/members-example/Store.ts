import { createStore, Store } from 'redux';
import { IMembersState, Reducers } from './Reducers';

export const MembersStore: Store<IMembersState> = createStore<IMembersState>(Reducers,
  (<any>window).devToolsExtension && (<any>window).devToolsExtension.call());
