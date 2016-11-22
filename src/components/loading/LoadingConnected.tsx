import { ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { ILoadingProps, Loading, ILoadingOwnProps, ILoadingDispatchProps } from './Loading';
import { addLoading, removeLoading } from './LoadingActions';
import { IReduxActionPayload } from '../../ReactVapor';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionPayload>) => void,
  ownProps: ILoadingOwnProps): ILoadingDispatchProps => {
  return {
    onRender: () => dispatch(addLoading(ownProps.id)),
    onDestroy: () => dispatch(removeLoading(ownProps.id))
  };
};

export const LoadingConnected: React.ComponentClass<ILoadingProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Loading);
