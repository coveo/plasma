import * as _ from 'underscore';
import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { IMemberAttributes } from '../models/Member';
import { IMemberEditViewState } from '../views/MemberEditView';
import { MembersActionsType, ISetMembersPayload } from '../actions/MembersActions';
import { MemberEditActionsType } from '../actions/MemberEditActions';
import { memberEditReducers, defaultMemberEditViewState, IMemberEditActionsPayloads } from './MemberEditReducers';

export interface IMembersCompositeState {
  addMemberState: IMemberEditViewState;
  members: IMemberEditViewState[];
}

const defaultMembersCompositeState: IMembersCompositeState = {
  addMemberState: _.extend({}, defaultMemberEditViewState),
  members: []
};

const setMembersReduder = (state: IMembersCompositeState = defaultMembersCompositeState,
  action: IReduxAction<ISetMembersPayload>): IMembersCompositeState => {
  return _.extend({}, state, {
    members: _.map(action.payload.members, (member: IMemberAttributes): IMemberEditViewState => {
      return {
        applyedState: _.extend({}, member),
        editionState: _.extend({}, member),
        id: _.uniqueId('member')
      };
    })
  });
};

const addMemberReducer = (state: IMembersCompositeState = defaultMembersCompositeState): IMembersCompositeState => {
  let newState = _.extend({}, state);

  // Clone and add the new member
  let newMember: IMemberAttributes = _.extend({}, state.addMemberState, {
    applyedState: _.extend({}, state.addMemberState.editionState),
    editionState: _.extend({}, state.addMemberState.editionState),
    id: _.uniqueId('member')
  });
  newState.members = [].concat(state.members, [newMember]);

  // Reset the addMemberState
  newState.addMemberState = _.extend({}, defaultMemberEditViewState);

  return newState;
};

const applyMemberEditReducers = (state: IMembersCompositeState = defaultMembersCompositeState,
  action: IReduxAction<IMemberEditActionsPayloads>): IMembersCompositeState => {
  let newState = _.extend({}, state);

  if (_.isNull(action.payload.id)) {
    newState.addMemberState = memberEditReducers(newState.addMemberState, action);
  } else {
    newState.members = _.map(state.members, (member: IMemberEditViewState) => memberEditReducers(member, action));
  }

  return newState;
};

export interface IMembersActionsPayloads extends ISetMembersPayload, IMemberEditActionsPayloads { }

interface IMembersActionsReducers {
  [id: string]: (state: IMembersCompositeState, action: IReduxAction<IMembersActionsPayloads>) => IMembersCompositeState;
}

const membersActionsReducers: IMembersActionsReducers = {
  [MembersActionsType.SetMembers]: setMembersReduder,
  [MembersActionsType.AddMember]: addMemberReducer,
  [MemberEditActionsType.ChangeMemberEmail]: applyMemberEditReducers,
  [MemberEditActionsType.ChangeMemberSendEmail]: applyMemberEditReducers,
  [MemberEditActionsType.ApplyMemberChanges]: applyMemberEditReducers,
  [MemberEditActionsType.CancelMemberChanges]: applyMemberEditReducers
};

export const membersReducers = (state: IMembersCompositeState = defaultMembersCompositeState,
  action: IReduxAction<IMembersActionsPayloads>): IMembersCompositeState => {
  let newState: IMembersCompositeState = state;

  if (!_.isUndefined(membersActionsReducers[action.type])) {
    newState = membersActionsReducers[action.type](state, action);
  }

  return newState;
};
