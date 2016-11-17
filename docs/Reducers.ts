import { Reducer, combineReducers } from 'redux';
import { membersReducers, IMembersCompositeState } from './members-example/reducers/MembersReducers';
import { IReactVaporState } from '../src/utils/ReduxUtils';
import { lastUpdatedCompositeReducer } from '../src/components/lastUpdated/LastUpdatedReducers';
import { filterBoxesReducer } from '../src/components/filterBox/FilterBoxReducers';
import { facetsReducer } from '../src/components/facets/FacetReducers';

export interface IReactVaporExampleState extends IReactVaporState {
  membersCompositeState: IMembersCompositeState;
}

export const Reducers: Reducer<IReactVaporExampleState> = combineReducers<IReactVaporExampleState>({
  membersCompositeState: membersReducers,
  lastUpdatedComposite: lastUpdatedCompositeReducer,
  filters: filterBoxesReducer,
  facets: facetsReducer
});
