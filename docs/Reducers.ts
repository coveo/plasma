import { Reducer, combineReducers } from 'redux';
import { membersReducers, IMembersCompositeState } from './members-example/reducers/MembersReducers';

export interface IReactVaporStore {
  membersCompositeState: IMembersCompositeState;
}

export const Reducers: Reducer<IReactVaporStore> = combineReducers<IReactVaporStore>({
  membersCompositeState: membersReducers
});
