import * as _ from 'underscore';
import * as $ from 'jquery';
import * as React from 'react';
import { ReduxConnect, IReduxProps } from '../../../src/utils/ReduxUtils';
import { Popover } from '../../../src/components/Popover';
import { MemberEditActions } from '../actions/MemberEditActions';
import { IReactVaporStore } from '../../Reducers';
import { IMemberAttributes } from '../models/Member';

export interface IMemberEditViewState {
  applyedState: IMemberAttributes;
  editionState: IMemberAttributes;
  id: string;
}

export interface IMemberEditViewOwnProps {
  id: string;
  onAddMember: () => void;
}

export interface IMemberEditViewStateProps extends IMemberAttributes {
  applyedEmail?: string;
}

export interface IMemberEditViewProps extends IMemberEditViewOwnProps,
  IMemberEditViewStateProps,
  IReduxProps { }

const mapStoreToProps = (store: IReactVaporStore, ownProps: IMemberEditViewOwnProps): IMemberEditViewStateProps => {
  let item: IMemberEditViewState;

  if (_.isNull(ownProps.id)) {
    item = store.membersCompositeState.addMemberState;
  } else {
    item = _.find(store.membersCompositeState.members, (memberState: IMemberEditViewState) => {
      return memberState.id == ownProps.id;
    });
  }

  return {
    applyedEmail: item.applyedState ? item.applyedState.email : '',
    email: item.editionState.email,
    sendEmail: item.editionState.sendEmail
  };
};

@ReduxConnect(mapStoreToProps)
export class MemberEditView extends React.Component<IMemberEditViewProps, IMemberEditViewState> {
  private popover: Popover;

  private emailInput: HTMLInputElement;
  private sendEmailCheckbox: HTMLInputElement;

  render() {
    let isNew = _.isNull(this.props.id);

    return (
      <Popover
        ref={(popover: Popover) => this.popover = popover}
        attachment='top left'
        targetAttachment='bottom left'
        constraints={[{
          to: 'scrollParent',
          pin: true
        }]}>
        <button type='button' className='btn'>
          {isNew ? 'Add member' : this.props.applyedEmail}
        </button>
        <div className='popover'>
          <div className='popover-body coveo-form p2'>
            <fieldset className='form-group input-field'>
              <input type='text' required name='email'
                ref={(email) => this.emailInput = email}
                value={this.props.email}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                  this.props.dispatch(MemberEditActions.changeMemberEmail(this.props.id, (event.target as HTMLInputElement).value));
                } } />
              <label>Email</label>
            </fieldset>
            <fieldset className='form-group'>
              <label className='form-control-label'>Send invite</label>
              <div className='form-control'>
                <label className='coveo-checkbox-label'>
                  <input type='checkbox' className='coveo-checkbox' name='sendEmail'
                    ref={(sendEmailCheckbox) => this.sendEmailCheckbox = sendEmailCheckbox}
                    checked={this.props.sendEmail}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => {
                      this.props.dispatch(MemberEditActions.changeMemberSendEmail(this.props.id, (event.target as HTMLInputElement).checked));
                    } } />
                  <button type='button' onClick={(jQueryEventObject) => { $(jQueryEventObject.currentTarget).prev().click(); } } />
                </label>
              </div>
            </fieldset>
          </div>
          <div className='popover-footer'>
            <button type='button' className='btn mod-primary mod-small' onClick={() => this.onSaveMember()}>
              {isNew ? 'Add' : 'Save'}
            </button>
            <button type='button' className='btn mod-small' onClick={() => this.onCancelEdition()}>Cancel</button>
          </div>
        </div>
      </Popover>
    );
  }

  private onSaveMember() {
    this.popover.toggleOpened(false);

    if (_.isNull(this.props.id) && _.isFunction(this.props.onAddMember)) {
      this.props.onAddMember();
    } else {
      this.props.dispatch(MemberEditActions.applyMemberChanges(this.props.id));
    }
  }

  private onCancelEdition() {
    this.popover.toggleOpened(false);

    this.props.dispatch(MemberEditActions.cancelMemberChanges(this.props.id));
  }
}
