import {createSelector} from 'reselect';
import {PlasmaState} from '../../ReactVaporState';
import {IStringListState} from '../../reusableState/customList/StringListReducers';

const initialMultiBoxIDs: IStringListState = {id: undefined, list: []};
const getMultiBoxIDs = (state: Partial<PlasmaState>, props: {id: string}): IStringListState =>
    (state && state.multilineIds && state.multilineIds[props.id]) || initialMultiBoxIDs;

const multiBoxIDsCombiner = (multiBoxState: IStringListState): string[] => (multiBoxState && multiBoxState.list) || [];

const getMultiBoxIDsList: (state: Partial<PlasmaState>, props: {id: string}) => string[] = createSelector(
    getMultiBoxIDs,
    multiBoxIDsCombiner
);

export const MultilineBoxSelectors = {
    getIds: getMultiBoxIDsList,
};
