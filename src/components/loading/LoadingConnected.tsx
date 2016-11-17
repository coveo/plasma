import { connect } from 'react-redux';
import * as React from 'react';
import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { ILoadingProps, Loading, ILoadingOwnProps, ILoadingDispatchProps } from './Loading';
import { ILoadingActionPayload, addLoading, removeLoading } from './LoadingActions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<ILoadingActionPayload>) => void,
  ownProps: ILoadingOwnProps): ILoadingDispatchProps => {
  return {
    onRender: () => dispatch(addLoading(ownProps.id)),
    onDestroy: () => dispatch(removeLoading(ownProps.id))
  };
};

export const LoadingConnected: React.ComponentClass<ILoadingProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Loading);
