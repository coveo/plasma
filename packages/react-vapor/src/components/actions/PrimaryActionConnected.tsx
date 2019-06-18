import * as React from 'react';
import {connect} from 'react-redux';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {IPrimaryActionProps, IPrimaryActionStateProps, PrimaryAction} from './PrimaryAction';

const mapStateToProps = (): IPrimaryActionStateProps => ({
    withReduxState: true,
});

const mapDispatchToProps = () => ({});

export const PrimaryActionConnected: React.ComponentClass<IPrimaryActionProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(PrimaryAction);
