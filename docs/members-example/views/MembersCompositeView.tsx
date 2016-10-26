import * as _ from 'underscore';
import * as React from 'react';
import { ReduxConnect, IReduxProps } from '../../../src/utils/ReduxUtils';
import { MemberEditView, IMemberEditViewState } from './MemberEditView';
import { MembersCompositeActions } from '../actions/MembersActions';
import { IReactVaporStore } from '../../Reducers';

export interface IMembersCompositeViewStateProps {
  members?: IMemberEditViewState[];
}

export interface IMembersCompositeViewProps extends IMembersCompositeViewStateProps, IReduxProps { }

const mapStoreToProps = (store: IReactVaporStore): IMembersCompositeViewStateProps => {
  return {
    members: store.membersCompositeState.members
  };
};

@ReduxConnect(mapStoreToProps)
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
            onAddMember={() => this.props.dispatch(MembersCompositeActions.addMember())}
            />
        </div>
        {memberEditViews}
      </div>
    );
  }
}
