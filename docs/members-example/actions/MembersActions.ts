import { IReduxAction } from '../../../src/utils/ReduxUtils';
import { IMemberEditViewState } from '../views/MemberEditView';
import { MemberCollection } from '../models/MemberCollection';
import { MemberModel } from '../models/MemberModel';

export const MembersActionsType = {
  SetMemberCollection: 'SET_MEMBER_COLLECTION',
  AddMemberToCollection: 'ADD_MEMBER_TO_COLLECTION',
  UpdateCollectionMember: 'UPDATE_COLLECTION_MEMBER',
  MountMemberEditView: 'MOUNT_MEMBER_EDIT_VIEW',
  OnChangeMemberEmail: 'ON_CHANGE_MEMBER_EMAIL',
  OnChangeMemberSendEmail: 'ON_CHANGE_MEMBER_SEND_EMAIL',
  CancelMemberEdition: 'ON_CANCEL_MEMBER_EDITION'
};

export interface IMemberEditViewAction extends IReduxAction, IMemberEditViewState { }

export const MembersCompositeActions = {
  setMemberCollection: (memberCollection: MemberCollection): IMemberEditViewAction => {
    return {
      type: MembersActionsType.SetMemberCollection,
      payload: memberCollection
    };
  },
  addMemberToCollection: (memberModel: MemberModel): IMemberEditViewAction => {
    return {
      type: MembersActionsType.AddMemberToCollection,
      payload: memberModel
    };
  },
  updateCollectionMember: (memberModel: MemberModel): IMemberEditViewAction => {
    return {
      type: MembersActionsType.UpdateCollectionMember,
      payload: memberModel
    };
  }
};

export const MemberEditActions = {
  mountMemberEditView: (modelCid: string): IMemberEditViewAction => {
    return {
      type: MembersActionsType.MountMemberEditView,
      modelCid
    };
  },
  onChangeMemberEmail: (modelCid: string, email: string): IMemberEditViewAction => {
    return {
      type: MembersActionsType.OnChangeMemberEmail,
      modelCid,
      email
    };
  },
  onChangeMemberSendEmail: (modelCid: string, sendEmail: boolean): IMemberEditViewAction => {
    return {
      type: MembersActionsType.OnChangeMemberSendEmail,
      modelCid,
      sendEmail
    };
  },
  onClickCancel: (modelCid: string, email: string, sendEmail: boolean): IMemberEditViewAction => {
    return {
      type: MembersActionsType.CancelMemberEdition,
      modelCid,
      email,
      sendEmail
    };
  }
};
