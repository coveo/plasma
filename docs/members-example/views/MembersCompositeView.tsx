import * as _ from 'underscore';
import * as React from 'react';
import { Action } from 'redux';
import { ReduxConnect, IReduxProps } from '../../../src/utils/ReduxUtils';
import { MemberEditView, IMemberEditViewState } from './MemberEditView';
import { addMember } from '../actions/MembersActions';
import { IReactVaporState } from '../../Reducers';

export interface IMembersCompositeViewStateProps {
  members?: IMemberEditViewState[];
}

export interface IMembersCompositeViewDispatchProps {
  addMember?: () => void;
}

export interface IMembersCompositeViewProps extends IMembersCompositeViewStateProps, IMembersCompositeViewDispatchProps, IReduxProps { }

const mapStateToProps = (state: IReactVaporState): IMembersCompositeViewStateProps => {
  return {
    members: state.membersCompositeState.members
  };
};

const mapDispatchToProps = (dispatch: (action: Action) => void): IMembersCompositeViewDispatchProps => {
  return {
    addMember: () => dispatch(addMember())
  };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MembersCompositeView extends React.Component<IMembersCompositeViewProps, any> {
  render() {
    let memberEditViews = _.map(this.props.members, (member: IMemberEditViewState) => {
      return (
        <div className='spaced-box' key={member.id}>
          <MemberEditView
            id={member.id}
            onAddMember={null}
            />
        </div>
      );
    });

    return (
      <div className='spaced-boxes-container flex flex-wrap'>
        <div className='spaced-box'>
          <MemberEditView
            id={null}
            onAddMember={() => this.props.addMember()}
            />
        </div>
        {memberEditViews}
      </div>
    );
  }
}
