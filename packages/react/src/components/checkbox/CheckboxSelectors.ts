import {createSelector} from 'reselect';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {ICheckboxState} from './CheckboxReducers';

const get = (state: IReactVaporState, {id}: {id: string}) => _.findWhere(state.checkboxes, {id});

const getIsSelected = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox?.checked);
const getIsDisabled = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox?.disabled);

export const CheckboxSelectors = {
    getIsSelected,
    getIsDisabled,
};
