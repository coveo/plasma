import { Reducer, combineReducers } from 'redux';
import { membersReducers, IMembersCompositeState } from './members-example/reducers/MembersReducers';

export interface IReactVaporState {
  membersCompositeState: IMembersCompositeState;
}

export const Reducers: Reducer<IReactVaporState> = combineReducers<IReactVaporState>({
  membersCompositeState: membersReducers
});
