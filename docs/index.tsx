import {Model as BackboneModel} from 'backbone';
import {Collection as BackboneCollection} from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import Redux from 'redux';
import ReactRedux from 'react-redux';
import {PopoverComponent} from "../src/components/PopoverComponent";

interface MemberModelAttributes {
  email?: string;
  sendEmail?: boolean;
  id?: string;
}

interface MemberModelOptions {
  newlyCreated?: boolean;
}

class MemberModel extends BackboneModel {
  newlyCreated: boolean;

  get email(): string { return this.get('email'); }

  get sendEmail(): boolean { return this.get('sendEmail'); }

  constructor(attributes?: MemberModelAttributes, options: MemberModelOptions = {}) {
    super(attributes, options);

    this.newlyCreated = !!options.newlyCreated;
  }

  defaults(): MemberModelAttributes {
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

  constructor(members?: MemberModelAttributes[], options?) {
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

interface GroupModelAttributes {
  displayName?: string;
  members?: MemberModelAttributes[];
}

class GroupModel extends Backbone.Model {
  memberCollection: MemberCollection;

  constructor(attributes?: GroupModelAttributes, options?) {
    super(attributes, options);

    this.memberCollection = new MemberCollection(attributes.members);
  }

  toJSON(): GroupModelAttributes {
    return _.extend(super.toJSON() || {}, {
      members: this.memberCollection.toJSON()
    });
  }
}

interface MemberEditViewPropsConnected {
  memberModel: MemberModel;
  onSaveMember: Function;
}

interface MemberEditViewStateProps {
  isOpen: boolean;
  email?: string;
  sendEmail?: boolean;
}

interface MemberEditViewProps extends MemberEditViewStateProps, MemberEditViewPropsConnected {
  onMount: Function;
  toggleOpenedTetherElement: Function;
  onChangeEmail: Function;
  onChangeSendEmail: Function;
  onClickCancel: Function;
}

interface MemberEditViewState extends MemberEditViewStateProps {
  modelCid?: string;
}

const actions = {
  AddMemberEditView: 'ADD_MEMBER_EDIT_VIEW',
  ToggleOpenedTetherElement: 'TOGGLE_OPENED_TETHER_ELEMENT',
  OnChangeMemberEmail: 'ON_CHANGE_MEMBER_EMAIL',
  OnChangeMemberSendEmail: 'ON_CHANGE_MEMBER_SEND_EMAIL',
  CancelMemberEdition: 'ON_CANCEL_MEMBER_EDITION'
};

const memberReducers = (state: MemberEditViewState = {isOpen: false}, action): MemberEditViewState => {
  let newState = _.extend({}, state);
  switch (action.type) {
    case actions.AddMemberEditView:
      newState.modelCid = action.modelCid;
      return newState;
    case actions.ToggleOpenedTetherElement:
      if (action.modelCid == state.modelCid) {
        newState.isOpen = action.isOpen;
        return newState;
      }
      return state;
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
          isOpen: false,
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

const mapStateToProps = (state: MemberEditViewState[], ownProps: MemberEditViewPropsConnected): MemberEditViewStateProps => {
  let item = _.find(state, (memberState: MemberEditViewState) => {
    return memberState.modelCid == ownProps.memberModel.cid;
  });

  return {
    isOpen: item && !_.isUndefined(item.isOpen) ? item.isOpen : false,
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

const toggleOpenedTetherElement = (modelCid: string, isOpen: boolean) => {
  return {
    type: actions.ToggleOpenedTetherElement,
    modelCid,
    isOpen
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onMount: () => dispatch(addMember(ownProps.memberModel.cid)),
    toggleOpenedTetherElement: (isOpen: boolean) => dispatch(toggleOpenedTetherElement(ownProps.memberModel.cid, isOpen)),
    onChangeEmail: (email: string) => dispatch(onChangeEmail(ownProps.memberModel.cid, email)),
    onChangeSendEmail: (sendEmail: boolean) => dispatch(onChangeSendEmail(ownProps.memberModel.cid, sendEmail)),
    onClickCancel: () => dispatch(onClickCancel(ownProps.memberModel.cid, ownProps.memberModel.email, ownProps.memberModel.sendEmail))
  };
};

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any): MemberEditViewProps => {
  return _.extend({}, stateProps, dispatchProps, ownProps);
};

class MemberEditView extends React.Component<MemberEditViewProps, MemberEditViewState> {
  refs: {
    email?: HTMLInputElement;
    sendEmail?: HTMLInputElement;
  } = {};

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <PopoverComponent
        attachment='top left'
        targetAttachment='bottom left'
        constraints={[{
                        to: 'scrollParent',
                        pin: true
                    }]}
        toggleOpenedTetherElement={this.props.toggleOpenedTetherElement}
      >
        <button className='btn' onClick={() => this.props.toggleOpenedTetherElement(!this.props.isOpen)}>
          {this.props.memberModel.isNew() ? 'Add member' : this.props.memberModel.email}
        </button>
        {
          this.props.isOpen && this.getPopoverContent()
        }
      </PopoverComponent>
    );
  }

  private getPopoverContent() {
    return (
      <div className='popover'>
        <div className='popover-body coveo-form p2'>
          <fieldset className='form-group input-field'>
            <input type='text' required name='email' ref='email' value={this.props.email}
                   onChange={(event) => this.props.onChangeEmail(event.target.value) }/>
            <label>Email</label>
          </fieldset>
          <fieldset className='form-group'>
            <label className='form-control-label'>Send invite</label>
            <div className='form-control'>
              <label className='coveo-checkbox-label'>
                <input type='checkbox' className='coveo-checkbox' name='sendEmail' ref='sendEmail'
                       checked={this.props.sendEmail}
                       onChange={(event) => this.props.onChangeSendEmail(event.target.checked) }/>
                <button type='button' onClick={(jQueryEventObject) => {
                                    $(jQueryEventObject.currentTarget).prev().click();
                                } }/>
              </label>
            </div>
          </fieldset>
        </div>
        <div className='popover-footer'>
          <button type='button' className='btn mod-primary' onClick={() => this.onSaveMember() }>
            {this.props.memberModel.isNew() ? 'Add' : 'Save'}
          </button>
          <button type='button' className='btn' onClick={this.props.onClickCancel}>Cancel</button>
        </div>
      </div>
    );
  }

  private onSaveMember() {
    this.props.toggleOpenedTetherElement(false);
    this.props.onSaveMember(this.props.memberModel, {
      email: this.refs.email.value,
      sendEmail: this.refs.sendEmail.checked
    });
  }
}

const MemberEditViewConnected = ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps)(MemberEditView);

const membersReducers = (state: MemberEditViewState[] = [], action): MemberEditViewState[] => {
  switch (action.type) {
    case actions.AddMemberEditView:
      return [
        ...state,
        memberReducers(undefined, action)
      ];
    case actions.ToggleOpenedTetherElement:
    case actions.OnChangeMemberEmail:
    case actions.OnChangeMemberSendEmail:
    case actions.CancelMemberEdition:
      return state.map(memberState => memberReducers(memberState, action));
    default:
      return state;
  }
};

interface MembersEditViewProps {
  memberCollection: MemberCollection;
  onSaveMember: Function;
}

class MembersEditView extends React.Component<MembersEditViewProps> {
  private store = Redux.createStore(membersReducers);

  componentDidMount() {
    this.props.memberCollection.onUpdated = () => {
      this.forceUpdate();
    };
  }

  render() {
    let memberEditViews = _.map(this.props.memberCollection.models, (memberModel) => {
      return (
        <div className="ml1">
          <MemberEditViewConnected
            key={memberModel.cid}
            memberModel={memberModel}
            onSaveMember={this.props.onSaveMember}
          />
        </div>
      );
    });
    let newModel = new MemberModel({}, {newlyCreated: true});

    return (
      <ReactRedux.Provider store={this.store}>
        <div className='flex'>
          <MemberEditViewConnected
            key={newModel.cid}
            memberModel={newModel}
            onSaveMember={this.props.onSaveMember}
          />
          {memberEditViews}
        </div>
      </ReactRedux.Provider>
    );
  }
}

class GroupEditView extends Marionette.LayoutView<Backbone.Model> {
  model: GroupModel;

  constructor(options?) {
    super(_.extend(options || {}, {
      el: '.js-simple-view',
      events: {
        'click #AddGroup': this.onAddGroup
      }
    }));
  }

  getTemplate() {
    return '#SimpleView';
  }

  onRender() {
    ReactDOM.render(React.createElement(MembersEditView, {
      memberCollection: this.model.memberCollection,
      onSaveMember: (memberModel: MemberModel, memberModelAttributes: MemberModelAttributes) =>
        this.onSaveMember(memberModel, memberModelAttributes)
    }), document.getElementById('GroupMembers'));
  }

  destroy() {
    ReactDOM.unmountComponentAtNode(document.getElementById('GroupMembers'));
  }

  private onSaveMember(memberModel: MemberModel, memberModelAttributes: MemberModelAttributes) {
    let existingModel = this.model.memberCollection.get(memberModel);
    if (existingModel) {
      existingModel.set(memberModelAttributes);
    } else {
      memberModel.newlyCreated = false;
      memberModel.set(memberModelAttributes, {silent: true}); // Prevent the double forceUpdate
      this.model.memberCollection.add(memberModel);
    }
  }

  private onAddGroup() {
    alert(JSON.stringify(this.model.toJSON()));
  }
}

let view = new GroupEditView({
  model: new GroupModel({
    displayName: 'My test',
    members: [{
      id: '1',
      email: 'test1@coveo.com',
      sendEmail: true
    }]
  })
});

view.render();
