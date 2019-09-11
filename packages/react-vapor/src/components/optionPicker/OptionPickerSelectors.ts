import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IOptionPickerState, optionPickerInitialState} from './OptionPickerReducers';

const get = (state: IReactVaporState, props: {id: string}): IOptionPickerState =>
    _.findWhere(state.optionPickers, {id: props.id}) || optionPickerInitialState;

const getOptionPicker = createSelector(
    get,
    (optionPicker: IOptionPickerState) => optionPicker
);

export const OptionPickerSelectors = {
    get,
    getOptionPicker,
};
