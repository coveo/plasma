import {createSelector} from 'reselect';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IPaginationState} from '../navigation/pagination';

const getPaginationState = (state: IReactVaporState, {id}: {id: string}) =>
    _.findWhere(state.paginationComposite, {id: id});

const getPaginationPageNumber = createSelector(
    getPaginationState,
    (paginationState: IPaginationState): number => paginationState?.pageNb ?? 0
);

export const PaginationSelectors = {
    getPaginationState,
    getPaginationPageNumber,
};
