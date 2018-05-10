import * as React from 'react';
import {connect} from 'react-redux';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ISecondaryActionsProps, ISecondaryActionsStateProps, SecondaryActions} from './SecondaryActions';

const mapStateToProps = (): ISecondaryActionsStateProps => ({
    withReduxState: true,
});

const mapDispatchToProps = () => ({});

export const SecondaryActionsConnected: React.ComponentClass<ISecondaryActionsProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(SecondaryActions);
