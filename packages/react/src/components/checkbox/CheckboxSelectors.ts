import {createSelector} from 'reselect';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {ICheckboxState} from './CheckboxReducers';
import {IGroupableCheckboxOwnProps} from './GroupableCheckboxConnected';
import {IGroupableCheckboxesState} from './GroupableCheckboxConstants';

const get = (
    state: PlasmaState,
    {id}: {id: string},
    isGroupableState?: boolean,
    groupableCheckboxProps?: IGroupableCheckboxOwnProps
) => {
    if (isGroupableState) {
        const groupableCheckboxesState: IGroupableCheckboxesState = _.findWhere(state.groupableCheckboxes, {
            parentId: groupableCheckboxProps.parentId || groupableCheckboxProps.id,
        });
        if (groupableCheckboxesState) {
            const checkboxState: ICheckboxState = groupableCheckboxProps.isParent
                ? groupableCheckboxesState.parent
                : _.findWhere(groupableCheckboxesState.checkboxes, {id: id});
            return checkboxState;
        }
    }
    return _.findWhere(state.checkboxes, {id});
};

const getIsSelected = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox?.checked);
const getIsDisabled = createSelector(get, (checkbox: ICheckboxState): boolean => checkbox && checkbox?.disabled);

export const CheckboxSelectors = {
    getIsSelected,
    getIsDisabled,
};
