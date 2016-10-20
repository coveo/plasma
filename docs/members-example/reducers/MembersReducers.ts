import * as _ from 'underscore';
import { MembersActionsType, IMemberEditViewAction } from '../actions/MembersActions';
import { IMemberEditViewState } from '../views/MemberEditView';
import { MemberCollection } from '../models/MemberCollection';

const memberReducers = (state: IMemberEditViewState = {}, action: IMemberEditViewAction): IMemberEditViewState => {
  let newState = _.extend({}, state);
  switch (action.type) {
    case MembersActionsType.MountMemberEditView:
      newState.modelCid = action.modelCid;
      return newState;
    case MembersActionsType.OnChangeMemberEmail:
      if (action.modelCid == state.modelCid) {
        newState.email = action.email;
        return newState;
      }
      return state;
    case MembersActionsType.OnChangeMemberSendEmail:
      if (action.modelCid == state.modelCid) {
        newState.sendEmail = action.sendEmail;
        return newState;
      }
      return state;
    case MembersActionsType.CancelMemberEdition:
      if (action.modelCid == state.modelCid) {
        return {
          modelCid: state.modelCid,
          email: action.email,
          sendEmail: action.sendEmail
        };
      }
      return state;
    default:
      return state;
  }
};

export interface IMembersCompositeState {
  editionStates: IMemberEditViewState[];
  memberCollection: MemberCollection;
}

const defaultMembersCompositeState: IMembersCompositeState = {
  editionStates: [],
  memberCollection: null
};

export const membersReducers = (state: IMembersCompositeState = defaultMembersCompositeState,
  action: IMemberEditViewAction): IMembersCompositeState => {
  switch (action.type) {
    case MembersActionsType.SetMemberCollection:
      return {
        memberCollection: action.payload,
        editionStates: state.editionStates
      };
    case MembersActionsType.AddMemberToCollection:
      return {
        memberCollection: new MemberCollection(state.memberCollection.models.concat([action.payload])),
        editionStates: state.editionStates
      };
    case MembersActionsType.UpdateCollectionMember:
      return {
        memberCollection: new MemberCollection(state.memberCollection.models),
        editionStates: state.editionStates
      };
    case MembersActionsType.MountMemberEditView:
      return {
        memberCollection: state.memberCollection,
        editionStates: [
          ...state.editionStates,
          memberReducers(undefined, action)
        ]
      };
    case MembersActionsType.OnChangeMemberEmail:
    case MembersActionsType.OnChangeMemberSendEmail:
    case MembersActionsType.CancelMemberEdition:
      return {
        memberCollection: state.memberCollection,
        editionStates: state.editionStates.map(memberState => memberReducers(memberState, action))
      };
    default:
      return state;
  }
};
