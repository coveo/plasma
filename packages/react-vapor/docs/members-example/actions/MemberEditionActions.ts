import {IReduxAction} from '../../../src/utils/ReduxUtils';

export const MemberEditionActionsType = {
    ApplyChanges: 'APPLY_MEMBER_CHANGES',
    CancelChanges: 'CANCEL_MEMBER_CHANGES',
    ChangeEmail: 'CHANGE_MEMBER_EMAIL',
    ChangeSendEmail: 'CHANGE_MEMBER_SEND_EMAIL',
    ToggleOpen: 'TOGGLE_MEMBER_OPEN',
};

export interface IMemberEditionActionPayload {
    id: string;
}

export interface IChangeEmailPayload extends IMemberEditionActionPayload {
    email: string;
}

export interface IChangeSendEmailPayload extends IMemberEditionActionPayload {
    sendEmail: boolean;
}

export interface IToggleOpenPayload extends IMemberEditionActionPayload {
    isOpen: boolean;
}

export interface IMemberEditionActionsPayloads extends IMemberEditionActionPayload,
    IChangeEmailPayload,
    IChangeSendEmailPayload,
    IToggleOpenPayload {}

export const applyChanges = (id: string): IReduxAction<IMemberEditionActionPayload> => {
    return {
        type: MemberEditionActionsType.ApplyChanges,
        payload: {
            id,
        },
    };
};

export const cancelChanges = (id: string): IReduxAction<IMemberEditionActionPayload> => {
    return {
        type: MemberEditionActionsType.CancelChanges,
        payload: {
            id,
        },
    };
};

export const changeEmail = (id: string, email: string): IReduxAction<IChangeEmailPayload> => {
    return {
        type: MemberEditionActionsType.ChangeEmail,
        payload: {
            id,
            email,
        },
    };
};

export const changeSendEmail = (id: string, sendEmail: boolean): IReduxAction<IChangeSendEmailPayload> => {
    return {
        type: MemberEditionActionsType.ChangeSendEmail,
        payload: {
            id,
            sendEmail,
        },
    };
};

export const toggleOpen = (id: string, isOpen: boolean): IReduxAction<IToggleOpenPayload> => {
    return {
        type: MemberEditionActionsType.ToggleOpen,
        payload: {
            id,
            isOpen,
        },
    };
};
