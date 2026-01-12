import {ComponentType, PropsWithChildren} from 'react';
import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    IRadioSelectConnectedProps,
    IRadioSelectDispatchProps,
    IRadioSelectProps,
    IRadioSelectStateProps,
    RadioSelect,
} from './RadioSelect';
import {removeRadioSelect, setRadioSelect} from './RadioSelectActions';
import {RadioSelectSelectors} from './RadioSelectSelectors';

const mapStateToProps = (state: PlasmaState, ownProps: IRadioSelectProps): IRadioSelectStateProps => ({
    value: RadioSelectSelectors.getValue(state, {id: ownProps.id}),
    disabledValues: RadioSelectSelectors.getDisabledValue(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch): IRadioSelectDispatchProps => ({
    onMount: (id: string, valueOnMount: string, disabledValuesOnMount?: string[]) =>
        dispatch(setRadioSelect(id, {value: valueOnMount, disabledValues: disabledValuesOnMount})),
    onUnmount: (id: string) => dispatch(removeRadioSelect(id)),
    onChange: (value: string, id: string) => dispatch(setRadioSelect(id, {value})),
});

/**
 * @deprecated Use Mantine Radio instead: https://mantine.dev/core/radio/
 */
export const RadioSelectConnected: ComponentType<PropsWithChildren<IRadioSelectProps & IRadioSelectConnectedProps>> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(RadioSelect);
