import { ReduxUtils } from '../../utils/ReduxUtils';
import { ISecondaryActionsStateProps, ISecondaryActionsProps, SecondaryActions } from './SecondaryActions';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = (): ISecondaryActionsStateProps => {
  return {
    withReduxState: true
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const SecondaryActionsConnected: React.ComponentClass<ISecondaryActionsProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(SecondaryActions);
