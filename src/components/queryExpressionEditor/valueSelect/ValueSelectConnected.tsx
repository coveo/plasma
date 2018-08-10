import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {ReduxUtils} from '../../../utils/ReduxUtils';
import { IDatePickerState } from '../../datePicker/DatePickerReducers';
import { IInputState } from '../../input/InputReducers';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import { valueSelectDateId } from '../valueSelectDate/ValueSelectDate';
import { valueSelectNumberId } from '../valueSelectNumber/ValueSelectNumber';
import { valueSelectStringId } from '../valueSelectString/ValueSelectString';
import {IValueSelectOwnProps, IValueSelectProps, IValueSelectStateProps, ValueSelect} from './ValueSelect';

const mapStateToProps = (state: IReactVaporState, ownProps: IValueSelectOwnProps): IValueSelectStateProps => {
    const valueSelectString: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.expressionEditorId}-${valueSelectStringId}`});
    const valuesSelectNumber: IInputState = _.findWhere(state.inputs, {id: `${ownProps.expressionEditorId}-${valueSelectNumberId}`});
    const valueSelectDate: IDatePickerState = _.findWhere(state.datePickers, {calendarId: `calendar-${ownProps.expressionEditorId}-${valueSelectDateId}`});

    return {
        selectedStringValue : valueSelectString && valueSelectString.selected ? valueSelectString.selected : undefined,
        selectedNumberValue : valuesSelectNumber && valuesSelectNumber.value ? valuesSelectNumber.value : undefined,
        selectedLowerDateValue : valueSelectDate && valueSelectDate.lowerLimit ? valueSelectDate.lowerLimit : undefined,
        selectedUpperDateValue : valueSelectDate && valueSelectDate.appliedUpperLimit ? valueSelectDate.appliedUpperLimit : undefined,
    };
};

export const ValueSelectConnected: React.ComponentClass<IValueSelectProps> = connect(mapStateToProps, null, ReduxUtils.mergeProps)(ValueSelect);
