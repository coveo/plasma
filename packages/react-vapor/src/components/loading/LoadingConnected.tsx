import * as React from 'react';
import {connect} from 'react-redux';
import {IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {ILoadingDispatchProps, ILoadingOwnProps, ILoadingProps, Loading} from './Loading';
import {addLoading, removeLoading} from './LoadingActions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ILoadingOwnProps
): ILoadingDispatchProps => ({
    onRender: () => dispatch(addLoading(ownProps.id)),
    onDestroy: () => dispatch(removeLoading(ownProps.id)),
});

export const LoadingConnected: React.ComponentClass<ILoadingProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(Loading);
