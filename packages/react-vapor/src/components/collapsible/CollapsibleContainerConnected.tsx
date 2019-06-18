import {connect} from 'react-redux';
import {findWhere} from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {
    CollapsibleContainer,
    ICollapsibleContainerOwnProps,
    ICollapsibleContainerProps,
    ICollapsibleContainerStateProps,
} from './CollapsibleContainer';

const mapStateToProps = (
    state: IReactVaporState,
    ownProps: ICollapsibleContainerOwnProps
): ICollapsibleContainerStateProps => {
    const collapsibleState = findWhere(state.collapsibles, {id: ownProps.id});

    return {expanded: collapsibleState && collapsibleState.expanded};
};

export const CollapsibleContainerConnected: React.ComponentClass<ICollapsibleContainerProps> = connect(
    mapStateToProps,
    undefined,
    ReduxUtils.mergeProps
)(CollapsibleContainer);
