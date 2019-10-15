import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    FilterBox,
    IFilterBoxDispatchProps,
    IFilterBoxOwnProps,
    IFilterBoxProps,
    IFilterBoxStateProps,
} from './FilterBox';
import {addFilter, filterThrough, removeFilter} from './FilterBoxActions';
import {FilterBoxSelectors} from './FilterBoxSelectors';

const FILTER_THROUGH_DEBOUNCE = 400;
export const debouncedFilterThrough = _.debounce(
    (dispatch: IDispatch, id: string, filterText: string) => dispatch(filterThrough(id, filterText)),
    FILTER_THROUGH_DEBOUNCE
);

const mapStateToProps = (state: IReactVaporState, ownProps: IFilterBoxOwnProps): IFilterBoxStateProps => ({
    filterText: FilterBoxSelectors.getFilterText(state, {id: ownProps.id}),
});

const mapDispatchToProps = (dispatch: IDispatch): IFilterBoxDispatchProps => ({
    onRender: (id: string) => dispatch(addFilter(id)),
    onDestroy: (id: string) => dispatch(removeFilter(id)),
    onFilter: (id: string, filterText: string) => debouncedFilterThrough(dispatch, id, filterText),
});

export const FilterBoxConnected: React.ComponentClass<IFilterBoxProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(FilterBox);
