import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {PER_PAGE_NUMBERS} from './perPage/NavigationPerPage';

export interface GetPaginationProps {
    id: string;
}

const getPaginationPage = (state: IReactVaporState, props: GetPaginationProps): number => {
    const pagination = _.findWhere(state.paginationComposite, {id: props.id});
    return pagination && pagination.pageNb || 0;
};

const getPerPage = (state: IReactVaporState, props: GetPaginationProps): number => {
    const pagination = _.findWhere(state.perPageComposite, {id: props.id});
    return pagination && pagination.perPage || PER_PAGE_NUMBERS[1];
};

export const NavigationSelectors = {
    getPaginationPage,
    getPerPage,
};
