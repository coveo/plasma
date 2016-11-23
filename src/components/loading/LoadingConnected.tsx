import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { ILoadingProps, Loading, ILoadingOwnProps, ILoadingDispatchProps } from './Loading';
import { addLoading, removeLoading } from './LoadingActions';
import { IReduxActionsPayload } from '../../ReactVapor';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: ILoadingOwnProps): ILoadingDispatchProps => ({
    onRender: () => dispatch(addLoading(ownProps.id)),
    onDestroy: () => dispatch(removeLoading(ownProps.id))
  });

export const LoadingConnected: React.ComponentClass<ILoadingProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Loading);
