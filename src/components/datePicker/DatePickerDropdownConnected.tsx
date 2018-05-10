import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {MONTH_PICKER_ID, YEAR_PICKER_ID} from '../calendar/Calendar';
import {addDropdown, closeDropdown, removeDropdown, toggleDropdown} from '../dropdown/DropdownActions';
import {IDropdownState} from '../dropdown/DropdownReducers';
import {resetOptionPickers} from '../optionPicker/OptionPickerActions';
import {changeOptionsCycle} from '../optionsCycle/OptionsCycleActions';
import {
    applyDatePicker,
    clearSelection,
    DateLimits,
    resetDatePickers,
    selectDate,
} from './DatePickerActions';
import {
    DatePickerDropdown,
    IDatePickerDropdownDispatchProps,
    IDatePickerDropdownOwnProps,
    IDatePickerDropdownProps,
    IDatePickerDropdownStateProps,
} from './DatePickerDropdown';
import {IDatePickerState} from './DatePickerReducers';

const mapStateToProps = (state: IReactVaporState, ownProps: IDatePickerDropdownOwnProps): IDatePickerDropdownStateProps => {
    const item: IDropdownState = _.findWhere(state.dropdowns, {id: ownProps.id});
    const datePickers: IDatePickerState[] = _.map(state.datePickers, (datePicker: IDatePickerState) => {
        if (datePicker.id.indexOf(ownProps.id) === 0) {
            return datePicker;
        }
    }).filter(Boolean);

    return {
        isOpened: item && item.opened,
        datePicker: datePickers.length ? datePickers[0] : null,
        withReduxState: true,
    };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void, ownProps: IDatePickerDropdownOwnProps): IDatePickerDropdownDispatchProps => ({
    onRender: () => dispatch(addDropdown(ownProps.id)),
    onDestroy: () => dispatch(removeDropdown(ownProps.id)),
    onClick: (datePicker: IDatePickerState) => {
        dispatch(toggleDropdown(ownProps.id));
        if (datePicker) {
            dispatch(resetOptionPickers(datePicker.id));
            dispatch(selectDate(datePicker.id, DateLimits.lower));
        }
    },
    onDocumentClick: () => dispatch(closeDropdown(ownProps.id)),
    onApply: () => {
        dispatch(closeDropdown(ownProps.id));
        dispatch(applyDatePicker(ownProps.id));
        dispatch(resetDatePickers(ownProps.id));
    },
    onCancel: (currentMonth: number, currentYear: number, isOpened: boolean) => {
        if (isOpened) {
            dispatch(changeOptionsCycle(`calendar-${ownProps.id}${MONTH_PICKER_ID}`, currentMonth));
            dispatch(changeOptionsCycle(`calendar-${ownProps.id}${YEAR_PICKER_ID}`, currentYear));
            dispatch(resetDatePickers(ownProps.id));
            dispatch(resetOptionPickers(ownProps.id));
            dispatch(closeDropdown(ownProps.id));
        }
    },
    onClear: () => {
        dispatch(clearSelection(ownProps.id));
    },
});

export const DatePickerDropdownConnected: React.ComponentClass<IDatePickerDropdownProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(DatePickerDropdown);
