import {createSelector} from 'reselect';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {ICheckboxState} from './CheckboxReducers.js';
import {IGroupableCheckboxOwnProps} from './GroupableCheckboxConnected.js';
import {IGroupableCheckboxesState} from './GroupableCheckboxConstants.js';

const get = (
    state: PlasmaState,
    {
        id,
        isGroupableState,
        groupableCheckboxProps,
    }: {id: string; isGroupableState?: boolean; groupableCheckboxProps?: IGroupableCheckboxOwnProps}
): ICheckboxState | undefined => {
    if (!isGroupableState) {
        return _.findWhere(state.checkboxes, {id});
    }
    const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state.groupableCheckboxes, {
        parentId: groupableCheckboxProps.parentId || groupableCheckboxProps.id,
    });
    if (groupableCheckboxesState) {
        return groupableCheckboxProps.isParent
            ? groupableCheckboxesState.parent
            : _.findWhere(groupableCheckboxesState.checkboxes, {id: id});
    }
};

const getIsSelected = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox?.checked);
const getIsDisabled = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox?.disabled);

export const CheckboxSelectors = {
    getIsSelected,
    getIsDisabled,
};
