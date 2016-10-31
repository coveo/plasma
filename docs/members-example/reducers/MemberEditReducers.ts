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

const toggleMemberOpen = (state: IMemberEditViewState, action: IReduxAction<IToggleMemberOpenPayload>): IMemberEditViewState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    isOpen: action.payload.isOpen
  });
};

const changeMemberEmailReducer = (state: IMemberEditViewState, action: IReduxAction<IChangeMemberEmailPayload>): IMemberEditViewState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    editionState: _.extend({}, state.editionState, {
      email: action.payload.email
    })
  });
};

const changeMemberSendEmailReducer = (state: IMemberEditViewState,
  action: IReduxAction<IChangeMemberSendEmailPayload>): IMemberEditViewState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    editionState: _.extend({}, state.editionState, {
      sendEmail: action.payload.sendEmail
    })
  });
};

const applyMemberChangesReducer = (state: IMemberEditViewState, action: IReduxAction<IMemberEditActionPayload>): IMemberEditViewState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    appliedState: _.extend({}, state.editionState),
    isOpen: false
  });
};

const cancelMemberChangesReducer = (state: IMemberEditViewState, action: IReduxAction<IMemberEditActionPayload>): IMemberEditViewState => {
  if (action.payload.id != state.id) {
    return state;
  }
  return _.extend({}, state, {
    editionState: _.extend({}, _.isNull(state.appliedState) ? defaultMemberAttributes : state.appliedState),
    isOpen: false
  });
};

export interface IMemberEditActionsPayloads extends IToggleMemberOpenPayload,
  IChangeMemberEmailPayload,
  IChangeMemberSendEmailPayload,
  IMemberEditActionPayload { }

interface IMemberEditActionsReducers {
  [id: string]: (state: IMemberEditViewState, action: IReduxAction<IMemberEditActionsPayloads>) => IMemberEditViewState;
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
  if (_.isUndefined(memberEditActionsReducers[action.type])) {
    return state;
  }
  return memberEditActionsReducers[action.type](state, action);
};
