import * as React from 'react';
import {Action} from 'redux';
import * as _ from 'underscore';
import {IReduxProps, ReduxConnect} from '../../../src/utils/ReduxUtils';
import {IReactVaporExampleState} from '../../Reducers';
import {addMember} from '../actions/MembersActions';
import {IMemberEditionState} from '../reducers/MemberEditionReducers';
import {MemberEditView} from './MemberEditView';

export interface IMembersCompositeViewStateProps {
    members?: IMemberEditionState[];
}

export interface IMembersCompositeViewDispatchProps {
    addMember?: () => void;
}

export interface IMembersCompositeViewProps extends IMembersCompositeViewStateProps, IMembersCompositeViewDispatchProps, IReduxProps {}

const mapStateToProps = (state: IReactVaporExampleState): IMembersCompositeViewStateProps => {
    return {
        members: state.membersCompositeState.members,
    };
};

const mapDispatchToProps = (dispatch: (action: Action) => void): IMembersCompositeViewDispatchProps => {
    return {
        addMember: () => dispatch(addMember()),
    };
};

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class MembersCompositeView extends React.Component<IMembersCompositeViewProps, any> {
    render() {
        const memberEditViews = _.map(this.props.members, (member: IMemberEditionState) => {
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
