import * as React from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {ISearchBarDispatchProps, ISearchBarOwnProps, ISearchBarProps, ISearchBarStateProps, SearchBar} from './SearchBar';
import {addSearchBar, removeSearchBar} from './SearchBarActions';

const mapStateToProps = (state: IReactVaporState, ownProps: ISearchBarOwnProps): ISearchBarStateProps => {
    const input = findWhere(state.inputs, {id: ownProps.id});
    const searchBar = findWhere(state.searchBars, {id: ownProps.id});

    return {
        withReduxState: true,
        disabled: input && input.disabled,
        searchText: input && input.value,
        searching: searchBar && searchBar.searching,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISearchBarOwnProps): ISearchBarDispatchProps => ({
    onMount: () => dispatch(addSearchBar(ownProps.id)),
    onUnmount: () => dispatch(removeSearchBar(ownProps.id)),
});

export const SearchBarConnected: React.ComponentClass<ISearchBarProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(SearchBar);
