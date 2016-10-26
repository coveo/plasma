import * as _ from 'underscore';
import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { defaultMemberAttributes } from '../models/Member';
import { IMemberEditViewState } from '../views/MemberEditView';
import {
  MemberEditActionsType,
  IMemberEditActionPayload,
  IChangeMemberEmailPayload,
  IChangeMemberSendEmailPayload
} from '../actions/MemberEditActions';

export const defaultMemberEditViewState: IMemberEditViewState = {
  applyedState: null,
  editionState: defaultMemberAttributes,
  id: null
};

const changeMemberEmailReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IChangeMemberEmailPayload>) => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.editionState = _.extend({}, state.editionState, { email: action.payload.email });
  }
  return newState;
};

const changeMemberSendEmailReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IChangeMemberSendEmailPayload>) => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.editionState = _.extend({}, state.editionState, { sendEmail: action.payload.sendEmail });
  }
  return newState;
};

const applyMemberChangesReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IMemberEditActionPayload>) => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    newState.applyedState = _.extend({}, state.editionState);
  }
  return newState;
};

const cancelMemberChangesReducer = (state: IMemberEditViewState = defaultMemberEditViewState,
  action: IReduxAction<IMemberEditActionPayload>) => {
  let newState: IMemberEditViewState = _.extend({}, state);
  if (action.payload.id == state.id) {
    let defaultState = _.isNull(state.applyedState) ? defaultMemberAttributes : state.applyedState;

    newState.editionState = _.extend({}, defaultState);
  }
  return newState;
};

export interface IMemberEditActionsPayloads extends IChangeMemberEmailPayload,
  IChangeMemberSendEmailPayload,
  IMemberEditActionPayload { }

interface IMemberEditActionsReducers {
  [id: string]: (state: IMemberEditViewState,
    action: IReduxAction<IMemberEditActionsPayloads>) => IMemberEditViewState;
}

const memberEditActionsReducers: IMemberEditActionsReducers = {
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
