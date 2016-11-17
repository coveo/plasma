import { ILastUpdatedState } from '../components/lastUpdated/LastUpdatedReducers';
import { IFacetState } from '../components/facets/FacetReducers';
import { IFilterState } from '../components/filterBox/FilterBoxReducers';
import { IFacet } from '../components/facets/Facet';
import { IPerPageState } from '../components/navigation/perPage/NavigationPerPageReducers';
import { ILoadingState } from '../components/loading/LoadingReducers';
import { IPaginationState } from '../components/navigation/pagination/NavigationPaginationReducers';
import { IInlinePromptOptions } from '../components/inlinePrompt/InlinePrompt';
import { IPromptState } from '../components/inlinePrompt/InlinePromptReducers';
import { IActionOptions } from '../components/actions/Action';
import { IActionBarState } from '../components/actions/ActionBarReducers';
import { extend } from 'underscore';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

export class ReduxUtils {
  static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return extend({}, stateProps, dispatchProps, ownProps);
  }
}

export interface IReactVaporState {
  lastUpdatedComposite?: ILastUpdatedState[];
  facets?: IFacetState[];
  filters?: IFilterState[];
  perPageComposite?: IPerPageState[];
  paginationComposite?: IPaginationState[];
  loadings?: ILoadingState[];
  prompts?: IPromptState[];
  actionBars?: IActionBarState[];
}

export const CommonActions = {
  clearState: 'CLEAR_STATE'
};

export const clearState = (): Redux.Action => {
  return {
    type: CommonActions.clearState
  };
};

export function ReduxConnect(mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): (target: any) => any {
  return target => (ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export interface IReduxAction<T> extends Redux.Action {
  payload?: T;
}

export interface IReduxActionPayload {
  id?: string;
  ids?: string[];
  facet?: string;
  facetRow?: IFacet;
  filterText?: string;
  pageNb?: number;
  perPage?: number;
  options?: IInlinePromptOptions;
  actions?: IActionOptions[];
}

export interface IReduxProps {
  dispatch?: (action: IReduxAction<any> | JQueryDeferred<any> | JQueryXHR | ((dispatch: Redux.Dispatch<any>) => void)) => void;
}

export interface IReduxStatePossibleProps {
  withReduxState?: boolean;
}
