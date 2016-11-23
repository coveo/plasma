import { ReduxUtils } from '../../utils/ReduxUtils';
import { ActionsDropdown, IActionsDropdownProps, IActionsDropdownStateProps } from './ActionsDropdown';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = (): IActionsDropdownStateProps => ({
  withReduxState: true
});

const mapDispatchToProps = () => ({});

export const ActionsDropdownConnected: React.ComponentClass<IActionsDropdownProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ActionsDropdown);
