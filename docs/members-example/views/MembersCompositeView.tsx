import * as _ from 'underscore';
import * as React from 'react';
import { MemberModel } from '../models/MemberModel';
import { MemberCollection } from '../models/MemberCollection';
import { MemberEditView } from './MemberEditView';
import { IMembersState } from '../Reducers';
import { ReduxConnect } from '../../../src/utils/ReduxUtils';

export interface IMembersCompositeViewStateProps {
  memberCollection?: MemberCollection;
}

export interface IMembersCompositeViewOwnProps {
  onSaveMember: Function;
}

export interface IMembersCompositeViewProps extends IMembersCompositeViewStateProps, IMembersCompositeViewOwnProps { }

const mapStateToProps = (state: IMembersState): IMembersCompositeViewStateProps => {
  return {
    memberCollection: state.membersCompositeState.memberCollection
  };
};

@ReduxConnect(mapStateToProps)
export class MembersCompositeView extends React.Component<IMembersCompositeViewProps, any> {
  render() {
    let memberEditViews = _.map(this.props.memberCollection.models, (memberModel) => {
      return (
        <div className='spaced-box' key={memberModel.cid}>
          <MemberEditView
            memberModel={memberModel}
            onSaveMember={this.props.onSaveMember}
            />
        </div>
      );
    });
    let newModel = new MemberModel({}, { newlyCreated: true });

    return (
      <div className='spaced-boxes-container flex flex-wrap'>
        <div className='spaced-box' key={newModel.cid}>
          <MemberEditView
            memberModel={newModel}
            onSaveMember={this.props.onSaveMember}
            />
        </div>
        {memberEditViews}
      </div>
    );
  }
}
