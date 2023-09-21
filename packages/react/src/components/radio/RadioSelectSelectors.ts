import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IRadioSelectState, radioSelectInitialState} from './RadioSelectReducers';

const get = (state: PlasmaState, {id}: {id: string}): IRadioSelectState =>
    _.findWhere(state.radioSelects, {id}) || radioSelectInitialState;

const getValue = createSelector(get, (radioSelect: IRadioSelectState) => radioSelect && radioSelect.value);

const getDisabledValue = createSelector(
    get,
    (radioSelect: IRadioSelectState) => radioSelect && radioSelect.disabledValues,
);
export const RadioSelectSelectors = {
    get,
    getValue,
    getDisabledValue,
};
