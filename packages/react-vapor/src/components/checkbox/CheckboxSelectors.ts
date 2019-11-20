import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ICheckboxState} from './CheckboxReducers';

const get = (state: IReactVaporState, {id}: {id: string}) => {
    return _.findWhere(state.checkboxes, {id});
};

const getIsSelected = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox.checked);

export const CheckboxSelectors = {
    getIsSelected,
};
