import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {changeOptionPicker} from '../optionPicker/OptionPickerActions';
import {IOptionPickerState} from '../optionPicker/OptionPickerReducers';
import {
    addDatePicker,
    changeDatePickerLowerLimit,
    changeDatePickerUpperLimit,
    DateLimits,
    removeDatePicker,
    selectDate,
} from './DatePickerActions';
import {IDatePickerState} from './DatePickerReducers';
import {
    DatesSelection,
    IDatesSelectionDispatchProps,
    IDatesSelectionOwnProps,
    IDatesSelectionProps,
    IDatesSelectionStateProps,
} from './DatesSelection';

const mapStateToProps = (state: IReactVaporState, ownProps: IDatesSelectionOwnProps): IDatesSelectionStateProps => {
    const item: IDatePickerState = _.findWhere(state.datePickers, {id: ownProps.id});
    const optionPicker: IOptionPickerState = _.findWhere(state.optionPickers, {id: ownProps.id});

    return {
        lowerLimit: item ? item.lowerLimit : new Date(),
        upperLimit: item ? item.upperLimit : new Date(),
        inputLowerLimit: item ? item.inputLowerLimit : new Date(),
        inputUpperLimit: item ? item.inputUpperLimit : new Date(),
        quickOption: optionPicker ? optionPicker.selectedValue : '',
        isSelecting: item ? item.selected : '',
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IDatesSelectionOwnProps
): IDatesSelectionDispatchProps => ({
    onRender: () => {
        dispatch(
            addDatePicker(
                ownProps.id,
                ownProps.isRange,
                ownProps.rangeLimit,
                ownProps.color,
                ownProps.calendarId,
                ownProps.initiallyUnselected,
                ownProps.isClearable,
                undefined,
                ownProps.initialDateRange
            )
        );
    },
    onDestroy: () => dispatch(removeDatePicker(ownProps.id)),
    onBlur: (date: Date, isUpperLimit: boolean, optionPicker = false) => {
        if (isUpperLimit) {
            dispatch(changeDatePickerUpperLimit(ownProps.id, date));
        } else {
            dispatch(changeDatePickerLowerLimit(ownProps.id, date));
            if (!ownProps.isRange) {
                dispatch(changeDatePickerUpperLimit(ownProps.id, date));
            }
        }

        if (!optionPicker) {
            dispatch(changeOptionPicker(ownProps.id, '', ''));
        }
    },
    onClick: (isUpperLimit: boolean) => {
        dispatch(selectDate(ownProps.id, isUpperLimit ? DateLimits.upper : DateLimits.lower));
    },
});

export const DatesSelectionConnected: React.ComponentClass<IDatesSelectionProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(DatesSelection);
