import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {ReduxUtils} from '../../../utils/ReduxUtils';
import {IDatePickerState} from '../../datePicker/DatePickerReducers';
import {IInputState} from '../../input/InputReducers';
import {IListBoxState} from '../../listBox/ListBoxReducers';
import {VALUE_SELECT_DATE_ID} from '../valueSelectDate/ValueSelectDate';
import {VALUE_SELECT_NUMBER_ID} from '../valueSelectNumber/ValueSelectNumber';
import {VALUE_SELECT_STRING_ID} from '../valueSelectString/ValueSelectString';
import {IValueSelectOwnProps, IValueSelectProps, IValueSelectStateProps, ValueSelect} from './ValueSelect';

const mapStateToProps = (state: IReactVaporState, ownProps: IValueSelectOwnProps): IValueSelectStateProps => {
    const valueSelectString: IListBoxState = _.findWhere(state.listBoxes, {id: `${ownProps.expressionEditorId}-${VALUE_SELECT_STRING_ID}`});
    const valuesSelectNumber: IInputState = _.findWhere(state.inputs, {id: `${ownProps.expressionEditorId}-${VALUE_SELECT_NUMBER_ID}`});
    const valueSelectDate: IDatePickerState = _.findWhere(state.datePickers, {calendarId: `calendar-${ownProps.expressionEditorId}-${VALUE_SELECT_DATE_ID}`});

    return {
        selectedStringValue: valueSelectString && valueSelectString.selected ? valueSelectString.selected : undefined,
        selectedNumberValue: valuesSelectNumber && valuesSelectNumber.value ? valuesSelectNumber.value : undefined,
        selectedLowerDateValue: valueSelectDate && valueSelectDate.lowerLimit ? valueSelectDate.lowerLimit : undefined,
        selectedUpperDateValue: valueSelectDate && valueSelectDate.appliedUpperLimit ? valueSelectDate.appliedUpperLimit : undefined,
    };
};

export const ValueSelectConnected: React.ComponentClass<IValueSelectProps> = connect(mapStateToProps, null, ReduxUtils.mergeProps)(ValueSelect);
