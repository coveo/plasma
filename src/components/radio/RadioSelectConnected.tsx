import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {IRadioSelectAllProps, IRadioSelectDispatchProps, IRadioSelectProps, IRadioSelectStateProps, RadioSelect} from './RadioSelect';
import {removeRadioSelect, setRadioSelect} from './RadioSelectActions';

const mapStateToProps = (state: IReactVaporState, ownProps: IRadioSelectProps): IRadioSelectStateProps => {
    const radioSelect = _.findWhere(state.radioSelects, {id: ownProps.id});

    return {
        value: radioSelect && radioSelect.value,
        disabledValues: radioSelect && radioSelect.disabledValues,
    };
};

const mapDispatchToProps = (dispatch: IDispatch): IRadioSelectDispatchProps => ({
    onMount: (id: string, valueOnMount: string, disabledValuesOnMount?: string[]) => dispatch(setRadioSelect(id, {value: valueOnMount, disabledValues: disabledValuesOnMount})),
    onUnmount: (id: string) => dispatch(removeRadioSelect(id)),
    onChange: (value: string, id: string) => dispatch(setRadioSelect(id, {value})),
});

export const RadioSelectConnected: React.ComponentClass<IRadioSelectAllProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(RadioSelect);
