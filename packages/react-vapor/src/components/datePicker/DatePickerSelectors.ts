import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDatePickerState} from './DatePickerReducers';

const getPicker = (state: IReactVaporState, props: {id: string}): IDatePickerState => {
    const datePickers: IDatePickerState[] = _.map(state.datePickers || [], (datePicker: IDatePickerState) => {
        if (datePicker.id.indexOf(props.id) === 0) {
            return datePicker;
        }
    }).filter(Boolean);
    return (datePickers && datePickers[0]) || null;
};

const getLimits = (state: IReactVaporState, props: {id: string}): [Date, Date?] => {
    const picker = DatePickerSelectors.getDatePicker(state, props);
    return picker ? [picker.appliedLowerLimit, picker.appliedUpperLimit] : [null, null];
};

const getDatePicker = createSelector(
    getPicker,
    (picker: IDatePickerState) => picker
);

const getDatePickerLimits = createSelector(
    getLimits,
    (limit: [Date, Date?]) => limit
);

export const DatePickerSelectors = {
    getDatePicker,
    getDatePickerLimits,
};
