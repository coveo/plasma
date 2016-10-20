import * as _ from 'underscore';
import * as $ from 'jquery';
import * as React from 'react';
import { ReduxConnect } from '../../../src/utils/ReduxUtils';
import { Popover } from '../../../src/components/Popover';
import { MemberEditActions } from '../actions/MembersActions';
import { MemberModel } from '../models/MemberModel';
import { IMembersState } from '../Reducers';

export interface IMemberEditViewStateProps {
  email?: string;
  sendEmail?: boolean;
}

export interface IMemberEditViewDispatchProps {
  onMount?: Function;
  onChangeEmail?: Function;
  onChangeSendEmail?: Function;
  onClickCancel?: Function;
}

export interface IMemberEditViewOwnProps {
  memberModel: MemberModel;
  onSaveMember: Function;
}

export interface IMemberEditViewProps extends IMemberEditViewStateProps, IMemberEditViewDispatchProps, IMemberEditViewOwnProps { }

export interface IMemberEditViewState extends IMemberEditViewStateProps {
  modelCid?: string;
}

const mapStateToProps = (state: IMembersState, ownProps: IMemberEditViewOwnProps): IMemberEditViewStateProps => {
  let item = _.find(state.membersCompositeState.editionStates, (memberState: IMemberEditViewState) => {
    return memberState.modelCid == ownProps.memberModel.cid;
  });

  return {
    email: item && !_.isUndefined(item.email) ? item.email : ownProps.memberModel.email,
    sendEmail: item && !_.isUndefined(item.sendEmail) ? item.sendEmail : ownProps.memberModel.sendEmail
  };
};

const mapDispatchToProps = (dispatch: (action: Redux.Action) => void, ownProps: IMemberEditViewOwnProps): IMemberEditViewDispatchProps => {
  return {
    onMount: () => dispatch(MemberEditActions.mountMemberEditView(ownProps.memberModel.cid)),
    onChangeEmail: (email: string) => dispatch(MemberEditActions.onChangeMemberEmail(ownProps.memberModel.cid, email)),
    onChangeSendEmail: (sendEmail: boolean) => dispatch(MemberEditActions.onChangeMemberSendEmail(ownProps.memberModel.cid, sendEmail)),
    onClickCancel: () => dispatch(MemberEditActions.onClickCancel(ownProps.memberModel.cid, ownProps.memberModel.email,
      ownProps.memberModel.sendEmail))
  };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MemberEditView extends React.Component<IMemberEditViewProps, IMemberEditViewState> {
  private popover: Popover;

  private emailInput: HTMLInputElement;
  private sendEmailCheckbox: HTMLInputElement;

  componentDidMount() {
    this.props.onMount();
  }

  render() {
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
          {this.props.memberModel.isNew() ? 'Add member' : this.props.memberModel.email}
        </button>
        <div className='popover'>
          <div className='popover-body coveo-form p2'>
            <fieldset className='form-group input-field'>
              <input type='text' required name='email' ref={(email) => this.emailInput = email} value={this.props.email}
                onChange={(event: React.FormEvent<HTMLInputElement>) => this.props.onChangeEmail((event.target as HTMLInputElement).value)} />
              <label>Email</label>
            </fieldset>
            <fieldset className='form-group'>
              <label className='form-control-label'>Send invite</label>
              <div className='form-control'>
                <label className='coveo-checkbox-label'>
                  <input type='checkbox' className='coveo-checkbox' name='sendEmail'
                    ref={(sendEmailCheckbox) => this.sendEmailCheckbox = sendEmailCheckbox} checked={this.props.sendEmail}
                    onChange={(event: React.FormEvent<HTMLInputElement>) => this.props.onChangeSendEmail((event.target as HTMLInputElement).checked)} />
                  <button type='button' onClick={(jQueryEventObject) => { $(jQueryEventObject.currentTarget).prev().click(); } } />
                </label>
              </div>
            </fieldset>
          </div>
          <div className='popover-footer'>
            <button type='button' className='btn mod-primary mod-small' onClick={() => this.onSaveMember()}>
              {this.props.memberModel.isNew() ? 'Add' : 'Save'}
            </button>
            <button type='button' className='btn mod-small' onClick={() => this.onCancelEdition()}>Cancel</button>
          </div>
        </div>
      </Popover>
    );
  }

  private onSaveMember() {
    this.popover.toggleOpened(false);

    this.props.onSaveMember(this.props.memberModel, {
      email: this.emailInput.value,
      sendEmail: this.sendEmailCheckbox.checked
    });
  }

  private onCancelEdition() {
    this.popover.toggleOpened(false);

    this.props.onClickCancel();
  }
}
