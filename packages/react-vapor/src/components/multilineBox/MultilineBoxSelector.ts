import {createSelector} from 'reselect';
import {IReactVaporState} from '../../ReactVapor';
import {IStringListState} from '../../reusableState/customList/StringListReducers';

const initialMultiBoxIDs: IStringListState = {id: undefined, list: []};
const getMultiBoxIDs = (state: Partial<IReactVaporState>, props: {id: string}): IStringListState => state && state.multilineIds && state.multilineIds[props.id] || initialMultiBoxIDs;

const multiBoxIDsCombiner = (
    multiBoxState: IStringListState,
): string[] => multiBoxState && multiBoxState.list || [];

const getMultiBoxIDsList: (state: Partial<IReactVaporState>, props: {id: string}) => string[] = createSelector(
    getMultiBoxIDs,
    multiBoxIDsCombiner,
);

export const MultilineBoxSelectors = {
    getIds: getMultiBoxIDsList,
};
