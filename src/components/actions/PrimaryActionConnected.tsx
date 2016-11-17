import { ReduxUtils } from '../../utils/ReduxUtils';
import { IPrimaryActionStateProps, IPrimaryActionProps, PrimaryAction } from './PrimaryAction';
import { connect } from 'react-redux';
import * as React from 'react';

const mapStateToProps = (): IPrimaryActionStateProps => {
  return {
    withReduxState: true
  };
};

const mapDispatchToProps = () => {
  return {};
};

export const PrimaryActionConnected: React.ComponentClass<IPrimaryActionProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(PrimaryAction);
