import * as _ from 'underscore';
import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { defaultMemberAttributes } from '../models/Member';
import { IMemberEditViewState } from '../views/MemberEditView';
import {
  MemberEditActionsType,
  IMemberEditActionPayload,
  IChangeMemberEmailPayload,
  IChangeMemberSendEmailPayload,
  IToggleMemberOpenPayload
} from '../actions/MemberEditActions';

export const defaultMemberEditViewState: IMemberEditViewState = {
  appliedState: null,
  editionState: defaultMemberAttributes,
  id: null,
  isOpen: false
};

const toggleMemberOpen = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IToggleMemberOpenPayload>): IMemberEditViewState => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.isOpen = action.payload.isOpen;
  }
  return newState;
};

const changeMemberEmailReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IChangeMemberEmailPayload>): IMemberEditViewState => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.editionState = _.extend({}, state.editionState, { email: action.payload.email });
  }
  return newState;
};

const changeMemberSendEmailReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IChangeMemberSendEmailPayload>): IMemberEditViewState => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.editionState = _.extend({}, state.editionState, { sendEmail: action.payload.sendEmail });
  }
  return newState;
};

const applyMemberChangesReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IMemberEditActionPayload>): IMemberEditViewState => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.appliedState = _.extend({}, state.editionState);
    newState.isOpen = false;
  }
  return newState;
};

const cancelMemberChangesReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IMemberEditActionPayload>): IMemberEditViewState => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    let defaultState = _.isNull(state.appliedState) ? defaultMemberAttributes : state.appliedState;

    newState.editionState = _.extend({}, defaultState);
    newState.isOpen = false;
  }
  return newState;
};

export interface IMemberEditActionsPayloads extends IToggleMemberOpenPayload,
  IChangeMemberEmailPayload,
  IChangeMemberSendEmailPayload,
  IMemberEditActionPayload { }

interface IMemberEditActionsReducers {
  [id: string]: (state: IMemberEditViewState,
    action: IReduxAction<IMemberEditActionsPayloads>) => IMemberEditViewState;
}

const memberEditActionsReducers: IMemberEditActionsReducers = {
  [MemberEditActionsType.ToggleMemberOpen]: toggleMemberOpen,
  [MemberEditActionsType.ChangeMemberEmail]: changeMemberEmailReducer,
  [MemberEditActionsType.ChangeMemberSendEmail]: changeMemberSendEmailReducer,
  [MemberEditActionsType.ApplyMemberChanges]: applyMemberChangesReducer,
  [MemberEditActionsType.CancelMemberChanges]: cancelMemberChangesReducer
};

export const memberEditReducers = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IMemberEditActionsPayloads>): IMemberEditViewState => {
  let newState: IMemberEditViewState = state;

  if (!_.isUndefined(memberEditActionsReducers[action.type])) {
    newState = memberEditActionsReducers[action.type](state, action);
  }

  return newState;
};
