import * as React from 'react';
import {Action} from 'redux';
import * as _ from 'underscore';
import {Popover} from '../../../src/components/popover/Popover';
import {IReduxProps, ReduxConnect} from '../../../src/utils/ReduxUtils';
import {IReactVaporExampleState} from '../../Reducers';
import {applyChanges, cancelChanges, changeEmail, changeSendEmail, toggleOpen} from '../actions/MemberEditionActions';
import {IMemberAttributes} from '../models/Member';
import {IMemberEditionState} from '../reducers/MemberEditionReducers';

export interface IMemberEditViewOwnProps {
    id: string;
    onAddMember: () => void;
}

export interface IMemberEditViewStateProps extends IMemberAttributes {
    appliedEmail?: string;
    isOpen?: boolean;
}

export interface IMemberEditViewDispatchProps {
    toggleMemberOpen?: (isOpen: boolean) => void;
    changeMemberEmail?: (email: string) => void;
    changeMemberSendEmail?: (sendEmail: boolean) => void;
    applyMemberChanges?: () => void;
    cancelMemberChanges?: () => void;
}

export interface IMemberEditViewProps extends IMemberEditViewOwnProps,
    IMemberEditViewStateProps,
    IMemberEditViewDispatchProps,
    IReduxProps {}

const mapStateToProps = (state: IReactVaporExampleState, ownProps: IMemberEditViewOwnProps): IMemberEditViewStateProps => {
    let item: IMemberEditionState;

    if (_.isNull(ownProps.id)) {
        item = state.membersCompositeState.addMemberState;
    } else {
        item = _.find(state.membersCompositeState.members, (memberState: IMemberEditionState) => {
            return memberState.id === ownProps.id;
        });
    }

    return {
        appliedEmail: item.appliedState ? item.appliedState.email : '',
        email: item.editionState.email,
        sendEmail: item.editionState.sendEmail,
        isOpen: item.isOpen,
    };
};

const mapDispatchToProps = (dispatch: (action: Action) => void, ownProps: IMemberEditViewOwnProps): IMemberEditViewDispatchProps => {
    return {
        toggleMemberOpen: (isOpen: boolean) => dispatch(toggleOpen(ownProps.id, isOpen)),
        changeMemberEmail: (email: string) => dispatch(changeEmail(ownProps.id, email)),
        changeMemberSendEmail: (sendEmail: boolean) => dispatch(changeSendEmail(ownProps.id, sendEmail)),
        applyMemberChanges: () => dispatch(applyChanges(ownProps.id)),
        cancelMemberChanges: () => dispatch(cancelChanges(ownProps.id)),
    };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MemberEditView extends React.Component<IMemberEditViewProps, IMemberEditionState> {
    private popover: Popover;

    private emailInput: HTMLInputElement;
    private sendEmailCheckbox: HTMLInputElement;

    render() {
        const isNew = _.isNull(this.props.id);

        return (
            <Popover
                ref={(popover: Popover) => this.popover = popover}
                attachment='top left'
                targetAttachment='bottom left'
                constraints={[{
                    to: 'scrollParent',
                    pin: true,
                }]}
                isOpen={this.props.isOpen}
                onToggle={(isOpen: boolean) => this.props.toggleMemberOpen(isOpen)}
                isModal>
                <button type='button' className='btn'>
                    {isNew ? 'Add member' : this.props.appliedEmail}
                </button>
                <div className='popover'>
                    <div className='popover-body coveo-form p2'>
                        <fieldset className='form-group input-field'>
                            <input
                                type='text' required name='email'
                                ref={(email) => this.emailInput = email}
                                value={this.props.email}
                                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                                    this.props.changeMemberEmail((event.target as HTMLInputElement).value);
                                }} />
                            <label>Email</label>
                        </fieldset>
                        <fieldset className='form-group'>
                            <label className='form-control-label'>Send invite</label>
                            <div className='form-control'>
                                <label className='coveo-checkbox-label'>
                                    <input
                                        type='checkbox' className='coveo-checkbox' name='sendEmail'
                                        ref={(sendEmailCheckbox) => this.sendEmailCheckbox = sendEmailCheckbox}
                                        checked={this.props.sendEmail}
                                        onChange={(event: React.FormEvent<HTMLInputElement>) => {
                                            this.props.changeMemberSendEmail((event.target as HTMLInputElement).checked);
                                        }} />
                                    <button type='button' onClick={() => this.sendEmailCheckbox.click()} />
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <div className='popover-footer'>
                        <button type='button' className='btn mod-primary mod-small' onClick={() => this.onSaveMember()}>
                            {isNew ? 'Add' : 'Save'}
                        </button>
                        <button type='button' className='btn mod-small' onClick={() => this.props.cancelMemberChanges()}>
                            Cancel
            </button>
                    </div>
                </div>
            </Popover>
        );
    }

    private onSaveMember() {
        if (_.isNull(this.props.id) && _.isFunction(this.props.onAddMember)) {
            this.props.onAddMember();
        } else {
            this.props.applyMemberChanges();
        }
    }
}
