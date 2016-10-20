import { combineReducers } from 'redux';
import { membersReducers, IMembersCompositeState } from './reducers/MembersReducers';

export interface IMembersState {
  membersCompositeState?: IMembersCompositeState;
}

export const Reducers: Redux.Reducer<IMembersState> = combineReducers<IMembersState>({
  membersCompositeState: membersReducers
});
