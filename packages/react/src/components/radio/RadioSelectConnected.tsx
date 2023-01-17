import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {
    IRadioSelectConnectedProps,
    IRadioSelectDispatchProps,
    IRadioSelectProps,
    IRadioSelectStateProps,
    RadioSelect,
} from './RadioSelect.js';
import {removeRadioSelect, setRadioSelect} from './RadioSelectActions.js';
import {RadioSelectSelectors} from './RadioSelectSelectors.js';

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
export const RadioSelectConnected: React.ComponentType<
    React.PropsWithChildren<IRadioSelectProps & IRadioSelectConnectedProps>
> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(RadioSelect);
