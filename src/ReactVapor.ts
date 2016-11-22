import { ILastUpdatedState } from './components/lastUpdated/LastUpdatedReducers';
import { IFacetState } from './components/facets/FacetReducers';
import { IFilterState } from './components/filterBox/FilterBoxReducers';
import { IFacet } from './components/facets/Facet';
import { IPerPageState } from './components/navigation/perPage/NavigationPerPageReducers';
import { ILoadingState } from './components/loading/LoadingReducers';
import { IPaginationState } from './components/navigation/pagination/NavigationPaginationReducers';

export interface IReactVaporState {
  lastUpdatedComposite?: ILastUpdatedState[];
  facets?: IFacetState[];
  filters?: IFilterState[];
  perPageComposite?: IPerPageState[];
  paginationComposite?: IPaginationState[];
  loadings?: ILoadingState[];
}

export interface IReduxActionPayload {
  id?: string;
  ids?: string[];
  facet?: string;
  facetRow?: IFacet;
  filterText?: string;
  pageNb?: number;
  perPage?: number;
}
