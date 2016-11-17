import { ReduxUtils } from '../../utils/ReduxUtils';
import { ActionsDropdown, IActionsDropdownProps, IActionsDropdownStateProps } from './ActionsDropdown';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = (): IActionsDropdownStateProps => {
  return {
    withReduxState: true
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const ActionsDropdownConnected: React.ComponentClass<IActionsDropdownProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ActionsDropdown);
