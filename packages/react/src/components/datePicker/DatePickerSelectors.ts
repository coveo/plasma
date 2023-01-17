import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {IDatePickerState} from './DatePickerReducers.js';

const getDatePicker = (state: PlasmaState, props: {id: string}): IDatePickerState => {
    const datePickers: IDatePickerState[] = _.map(state.datePickers || [], (datePicker: IDatePickerState) => {
        if (datePicker.id.indexOf(props.id) === 0) {
            return datePicker;
        }
    }).filter(Boolean);
    return (datePickers && datePickers[0]) || null;
};

const getDatePickerLimits = (state: PlasmaState, props: {id: string}): [Date, Date?] => {
    const picker = DatePickerSelectors.getDatePicker(state, props);
    return picker ? [picker.appliedLowerLimit, picker.appliedUpperLimit] : [null, null];
};

export const DatePickerSelectors = {
    getDatePicker,
    getDatePickerLimits,
};
