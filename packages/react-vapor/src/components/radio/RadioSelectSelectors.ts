import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IRadioSelectState, radioSelectInitialState} from './RadioSelectReducers';

const get = (state: IReactVaporState, {id}: {id: string}): IRadioSelectState => {
    return _.findWhere(state.radioSelects, {id}) || radioSelectInitialState;
};

const getValue = createSelector(get, (radioSelect: IRadioSelectState) => radioSelect && radioSelect.value);

const getDisabledValue = createSelector(
    get,
    (radioSelect: IRadioSelectState) => radioSelect && radioSelect.disabledValues
);
export const RadioSelectSelectors = {
    get,
    getValue,
    getDisabledValue,
};
