import {createSelector} from 'reselect';
import {PlasmaState} from '../../PlasmaState.js';
import {IStringListState} from '../../reusableState/customList/StringListReducers.js';

const initialMultiBoxIDs: IStringListState = {id: undefined, list: []};

const getMultiBoxIDs = (state: Partial<PlasmaState>, {id}: {id: string}): IStringListState =>
    state?.multilineIds?.[id] ?? initialMultiBoxIDs;

const multiBoxIDsCombiner = (multiBoxState: IStringListState): string[] => multiBoxState?.list ?? [];

const getMultiBoxIDsList: (state: Partial<PlasmaState>, props: {id: string}) => string[] = createSelector(
    getMultiBoxIDs,
    multiBoxIDsCombiner
);

export const MultilineBoxSelectors = {
    getIds: getMultiBoxIDsList,
};
