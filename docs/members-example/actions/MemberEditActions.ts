import { IReduxAction } from '../../../src/utils/ReduxUtils';

export const MemberEditActionsType = {
  ChangeMemberEmail: 'CHANGE_MEMBER_EMAIL',
  ChangeMemberSendEmail: 'CHANGE_MEMBER_SEND_EMAIL',
  ApplyMemberChanges: 'APPLY_MEMBER_CHANGES',
  CancelMemberChanges: 'CANCEL_MEMBER_CHANGES'
};

export interface IMemberEditActionPayload {
  id: string;
}

export interface IChangeMemberEmailPayload extends IMemberEditActionPayload {
  email: string;
}

export interface IChangeMemberSendEmailPayload extends IMemberEditActionPayload {
  sendEmail: boolean;
}

const changeMemberEmail = (id: string, email: string): IReduxAction<IChangeMemberEmailPayload> => {
  return {
    type: MemberEditActionsType.ChangeMemberEmail,
    payload: {
      id,
      email
    },
  };
};

const changeMemberSendEmail = (id: string, sendEmail: boolean): IReduxAction<IChangeMemberSendEmailPayload> => {
  return {
    type: MemberEditActionsType.ChangeMemberSendEmail,
    payload: {
      id,
      sendEmail
    }
  };
};

const applyMemberChanges = (id: string): IReduxAction<IMemberEditActionPayload> => {
  return {
    type: MemberEditActionsType.ApplyMemberChanges,
    payload: {
      id
    }
  };
};

const cancelMemberChanges = (id: string): IReduxAction<IMemberEditActionPayload> => {
  return {
    type: MemberEditActionsType.CancelMemberChanges,
    payload: {
      id
    }
  };
};

export const MemberEditActions = {
  changeMemberEmail,
  changeMemberSendEmail,
  applyMemberChanges,
  cancelMemberChanges
};
