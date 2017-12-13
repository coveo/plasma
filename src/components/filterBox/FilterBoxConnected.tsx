import { filterThrough, removeFilter, addFilter } from './FilterBoxActions';
import { Dispatch, ReduxUtils } from '../../utils/ReduxUtils';
import { IReactVaporState } from '../../ReactVapor';
import {
  FilterBox,
  IFilterBoxOwnProps,
  IFilterBoxStateProps,
  IFilterBoxDispatchProps,
  IFilterBoxProps
} from './FilterBox';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const FILTER_THROUGH_DEBOUNCE = 400;
const debouncedFilterThrough = _.debounce(
  (dispatch: Dispatch, id: string, filterText: string) => dispatch(filterThrough(id, filterText)),
  FILTER_THROUGH_DEBOUNCE,
);

const mapStateToProps = (state: IReactVaporState, ownProps: IFilterBoxOwnProps): IFilterBoxStateProps => {
  let filterItem = _.findWhere(state.filters, { id: ownProps.id });

  return {
    filterText: filterItem ? filterItem.filterText : ''
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IFilterBoxDispatchProps => ({
  onRender: (id: string) => dispatch(addFilter(id)),
  onDestroy: (id: string) => dispatch(removeFilter(id)),
  onFilter: (id: string, filterText: string) => debouncedFilterThrough(dispatch, id, filterText),
});

export const FilterBoxConnected: React.ComponentClass<IFilterBoxProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(FilterBox);
