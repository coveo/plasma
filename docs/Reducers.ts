import { Reducer, combineReducers } from 'redux';
import { membersReducers, IMembersCompositeState } from './members-example/reducers/MembersReducers';
import { IReactVaporState } from '../src/utils/ReduxUtils';
import { lastUpdatedComposite } from '../src/components/lastUpdated/LastUpdatedReducers';
import { filters } from '../src/components/filterBox/FilterBoxReducers';
import { facets } from '../src/components/facets/FacetReducers';
import { perPageComposite } from '../src/components/navigation/perPage/NavigationPerPageReducers';
import { paginationComposite } from '../src/components/navigation/pagination/NavigationPaginationReducers';
import { loadings } from '../src/components/loading/LoadingReducers';
import * as Redux from 'redux';

export interface IReactVaporExampleState extends IReactVaporState {
  membersCompositeState: IMembersCompositeState;
  lastAction: Redux.Action;
}

const lastAction = (state: IReactVaporExampleState = null, action: Redux.Action): Redux.Action => {
  return action;
};

export const Reducers: Reducer<IReactVaporExampleState> = combineReducers<IReactVaporExampleState>({
  membersCompositeState: membersReducers,
  lastUpdatedComposite,
  filters,
  facets,
  perPageComposite,
  paginationComposite,
  loadings,
  lastAction
});
