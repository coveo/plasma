import {createSelector} from 'reselect';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {IPaginationState} from '../navigation/pagination/index.js';

const getPaginationState = (state: PlasmaState, {id}: {id: string}) => _.findWhere(state.paginationComposite, {id: id});

const getPaginationPageNumber = createSelector(
    getPaginationState,
    (paginationState: IPaginationState): number => paginationState?.pageNb ?? 0
);

export const PaginationSelectors = {
    getPaginationState,
    getPaginationPageNumber,
};
