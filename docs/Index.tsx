///<reference path="../node_modules/@types/redux/index.d.ts"/>

import * as React from 'react';
import * as _ from 'underscore';
import * as $ from 'jquery';
import { Model as BackboneModel, Collection as BackboneCollection } from 'backbone';
import { FormEvent } from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

import { ReduxUtils } from '../src/utils/ReduxUtils';
import { ChosenSelect } from '../src/components/ChosenSelect.tsx';
import { Popover } from '../src/components/Popover';
import { Svg } from '../src/components/Svg.tsx';

import './style.scss';
import 'coveo-styleguide/dist/css/CoveoStyleGuide.css';

interface IMemberModelAttributes {
  email?: string;
  sendEmail?: boolean;
  id?: string;
}

interface IMemberModelOptions {
  newlyCreated?: boolean;
}

class MemberModel extends BackboneModel {
  newlyCreated: boolean;

  get email(): string { return this.get('email'); }

  get sendEmail(): boolean { return this.get('sendEmail'); }

  constructor(attributes?: IMemberModelAttributes, options: IMemberModelOptions = {}) {
    super(attributes, options);

    this.newlyCreated = !!options.newlyCreated;
  }

  defaults(): IMemberModelAttributes {
    return {
      email: '',
      sendEmail: false
    };
  }

  isNew() {
    return this.newlyCreated;
  }
}

class MemberCollection extends BackboneCollection<MemberModel> {
  onUpdated: Function;

  constructor(members?: IMemberModelAttributes[], options?: any) {
    super(members, _.extend(options || {}, {
      model: MemberModel
    }));

    this.listenTo(this, 'add remove change', () => {
      if (_.isFunction(this.onUpdated)) {
        this.onUpdated();
      }
    });
  }
}

interface IMemberEditViewPropsConnected {
  memberModel: MemberModel;
  onSaveMember: Function;
}

interface IMemberEditViewStateProps {
  email?: string;
  sendEmail?: boolean;
}

interface IMemberEditViewProps extends IMemberEditViewStateProps, IMemberEditViewPropsConnected {
  onMount?: Function;
  toggleOpenedTetherElement?: Function;
  onChangeEmail?: Function;
  onChangeSendEmail?: Function;
  onClickCancel?: Function;
}

interface IMemberEditViewState extends IMemberEditViewStateProps {
  modelCid?: string;
}

interface IIMemberEditViewAction extends IMemberEditViewState {
  type: string;
}

const actions = {
  AddMemberEditView: 'ADD_MEMBER_EDIT_VIEW',
  OnChangeMemberEmail: 'ON_CHANGE_MEMBER_EMAIL',
  OnChangeMemberSendEmail: 'ON_CHANGE_MEMBER_SEND_EMAIL',
  CancelMemberEdition: 'ON_CANCEL_MEMBER_EDITION'
};

const memberReducers = (state: IMemberEditViewState = {}, action: IIMemberEditViewAction): IMemberEditViewState => {
  let newState = _.extend({}, state);
  switch (action.type) {
    case actions.AddMemberEditView:
      newState.modelCid = action.modelCid;
      return newState;
    case actions.OnChangeMemberEmail:
      if (action.modelCid == state.modelCid) {
        newState.email = action.email;
        return newState;
      }
      return state;
    case actions.OnChangeMemberSendEmail:
      if (action.modelCid == state.modelCid) {
        newState.sendEmail = action.sendEmail;
        return newState;
      }
      return state;
    case actions.CancelMemberEdition:
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

const mapStateToProps = (state: IMemberEditViewState[], ownProps: IMemberEditViewPropsConnected): IMemberEditViewStateProps => {
  let item = _.find(state, (memberState: IMemberEditViewState) => {
    return memberState.modelCid == ownProps.memberModel.cid;
  });

  return {
    email: item && !_.isUndefined(item.email) ? item.email : ownProps.memberModel.email,
    sendEmail: item && !_.isUndefined(item.sendEmail) ? item.sendEmail : ownProps.memberModel.sendEmail
  };
};

const addMember = (modelCid: string) => {
  return {
    type: actions.AddMemberEditView,
    modelCid
  };
};

const onChangeEmail = (modelCid: string, email: string) => {
  return {
    type: actions.OnChangeMemberEmail,
    modelCid,
    email
  };
};

const onChangeSendEmail = (modelCid: string, sendEmail: boolean) => {
  return {
    type: actions.OnChangeMemberSendEmail,
    modelCid,
    sendEmail
  };
};

const onClickCancel = (modelCid: string, email: string, sendEmail: boolean) => {
  return {
    type: actions.CancelMemberEdition,
    modelCid,
    email,
    sendEmail
  };
};

const mapDispatchToProps = (dispatch: (action: Redux.Action) => void, ownProps: IMemberEditViewPropsConnected) => {
  return {
    onMount: () => dispatch(addMember(ownProps.memberModel.cid)),
    onChangeEmail: (email: string) => dispatch(onChangeEmail(ownProps.memberModel.cid, email)),
    onChangeSendEmail: (sendEmail: boolean) => dispatch(onChangeSendEmail(ownProps.memberModel.cid, sendEmail)),
    onClickCancel: () => dispatch(onClickCancel(ownProps.memberModel.cid, ownProps.memberModel.email, ownProps.memberModel.sendEmail))
  };
};

class MemberEditView extends React.Component<IMemberEditViewProps, IMemberEditViewState> {
  refs: {
    [key: string]: (Element | React.Component<any, any>);
    email: HTMLInputElement;
    sendEmail: HTMLInputElement;
    popover: Popover;
  };

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <Popover
        ref='popover'
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
              <input type='text' required name='email' ref='email' value={this.props.email}
                onChange={(event: FormEvent<HTMLInputElement>) => this.props.onChangeEmail((event.target as HTMLInputElement).value)} />
              <label>Email</label>
            </fieldset>
            <fieldset className='form-group'>
              <label className='form-control-label'>Send invite</label>
              <div className='form-control'>
                <label className='coveo-checkbox-label'>
                  <input type='checkbox' className='coveo-checkbox' name='sendEmail' ref='sendEmail' checked={this.props.sendEmail}
                    onChange={(event: FormEvent<HTMLInputElement>) => this.props.onChangeSendEmail((event.target as HTMLInputElement).checked)} />
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
    this.refs.popover.toggleOpened(false);

    this.props.onSaveMember(this.props.memberModel, {
      email: this.refs.email.value,
      sendEmail: this.refs.sendEmail.checked
    });
  }

  private onCancelEdition() {
    this.refs.popover.toggleOpened(false);

    this.props.onClickCancel();
  }
}

const MemberEditViewConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(MemberEditView);

const membersReducers = (state: IMemberEditViewState[] = [], action: IIMemberEditViewAction): IMemberEditViewState[] => {
  switch (action.type) {
    case actions.AddMemberEditView:
      return [
        ...state,
        memberReducers(undefined, action)
      ];
    case actions.OnChangeMemberEmail:
    case actions.OnChangeMemberSendEmail:
    case actions.CancelMemberEdition:
      return state.map(memberState => memberReducers(memberState, action));
    default:
      return state;
  }
};

interface IMembersEditViewProps {
  memberCollection: MemberCollection;
  onSaveMember: Function;
}

class MembersEditView extends React.Component<IMembersEditViewProps, any> {
  private store = createStore(membersReducers);

  componentDidMount() {
    this.props.memberCollection.onUpdated = () => {
      this.forceUpdate();
    };
  }

  render() {
    let memberEditViews = _.map(this.props.memberCollection.models, (memberModel) => {
      return (
        <div className='ml1' key={memberModel.cid}>
          <MemberEditViewConnected
            memberModel={memberModel}
            onSaveMember={this.props.onSaveMember}
            />
        </div>
      );
    });
    let newModel = new MemberModel({}, { newlyCreated: true });

    return (
      <Provider store={this.store}>
        <div className='flex'>
          <MemberEditViewConnected
            key={newModel.cid}
            memberModel={newModel}
            onSaveMember={this.props.onSaveMember}
            />
          {memberEditViews}
        </div>
      </Provider>
    );
  }
}

class App extends React.Component<any, any> {
  memberCollection = new MemberCollection([{
    id: '1',
    email: 'test1@coveo.com',
    sendEmail: true
  }]);

  render() {
    return (
      <div className='coveo-form'>
        <div className='form-group'>
          <label className='form-control-label'>
            My list of members
          </label>
          <div className='form-control'>
            <MembersEditView
              memberCollection={this.memberCollection}
              onSaveMember={(memberModel: MemberModel, memberModelAttributes: IMemberModelAttributes) =>
                this.onSaveMember(memberModel, memberModelAttributes)}
              />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>
            Include an SVG
          </label>
          <div className='form-control'>
            <Svg svgName='domain-google' className='icon mod-2x' />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>
            Chosen single select
          </label>
          <div className='form-control'>
            <ChosenSelect placeholderTextSingle='Choose a country' defaultValue='France'>
              <option value='Canada'>Canada</option>
              <option value='France'>France</option>
              <option value='United States'>United States</option>
            </ChosenSelect>
          </div>
        </div>
      </div>
    );
  }

  private onSaveMember(memberModel: MemberModel, memberModelAttributes: IMemberModelAttributes) {
    let existingModel = this.memberCollection.get(memberModel);

    if (existingModel) {
      existingModel.set(memberModelAttributes);
    } else {
      memberModel.newlyCreated = false;
      memberModel.set(memberModelAttributes, { silent: true }); // Prevent the double forceUpdate

      this.memberCollection.add(memberModel);
    }
  }
}

ReactDOMRender(<App />, document.getElementById('App'));
