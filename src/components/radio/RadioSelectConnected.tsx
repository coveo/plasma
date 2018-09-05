import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {IRadioSelectAllProps, IRadioSelectDispatchProps, IRadioSelectProps, IRadioSelectStateProps, RadioSelect} from './RadioSelect';
import {removeRadioSelect, setRadioSelect} from './RadioSelectActions';
import {IRadioSelectState} from './RadioSelectReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IRadioSelectProps): IRadioSelectStateProps => {
    const radioSelect: IRadioSelectState = _.findWhere(state.radioSelects, {id: ownProps.id});
    return {
        value: radioSelect && radioSelect.value,
    };
};

const mapDispatchToProps = (dispatch: IDispatch): IRadioSelectDispatchProps => ({
    onMount: (id: string, valueOnMount: string, disabledValuesOnMount?: string[]) => dispatch(setRadioSelect(id, valueOnMount, disabledValuesOnMount)),
    onUnmount: (id: string) => dispatch(removeRadioSelect(id)),
    onChange: (id: string, value: string) => dispatch(setRadioSelect(id, value)),
});

export const CheckboxConnected: React.ComponentClass<IRadioSelectAllProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(RadioSelect);
