import { Reducer, combineReducers } from 'redux';
import { membersReducers, IMembersCompositeState } from './members-example/reducers/MembersReducers';
import { IReactVaporState } from '../src/utils/ReduxUtils';
import { lastUpdatedComposite } from '../src/components/lastUpdated/LastUpdatedReducers';
import { filters } from '../src/components/filterBox/FilterBoxReducers';
import { facets } from '../src/components/facets/FacetReducers';
import { perPageComposite } from '../src/components/navigation/perPage/NavigationPerPageReducers';
import { paginationComposite } from '../src/components/navigation/pagination/NavigationPaginationReducers';

export interface IReactVaporExampleState extends IReactVaporState {
  membersCompositeState: IMembersCompositeState;
}

export const Reducers: Reducer<IReactVaporExampleState> = combineReducers<IReactVaporExampleState>({
  membersCompositeState: membersReducers,
  lastUpdatedComposite: lastUpdatedComposite,
  filters: filters,
  facets: facets,
  perPageComposite: perPageComposite,
  paginationComposite: paginationComposite
});
