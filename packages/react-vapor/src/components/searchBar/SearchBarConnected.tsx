import * as React from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {
    ISearchBarDispatchProps,
    ISearchBarOwnProps,
    ISearchBarProps,
    ISearchBarStateProps,
    SearchBar,
} from './SearchBar';
import {addSearchBar, removeSearchBar, setSearchBarValue} from './SearchBarActions';

const mapStateToProps = (state: IReactVaporState, ownProps: ISearchBarOwnProps): ISearchBarStateProps => {
    const searchBar = findWhere(state.searchBars, {id: ownProps.id});

    return {
        disabled: searchBar && searchBar.disabled,
        value: searchBar && searchBar.value,
        searching: searchBar && searchBar.searching,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: ISearchBarOwnProps): ISearchBarDispatchProps => ({
    onMount: () => dispatch(addSearchBar(ownProps.id, ownProps.disabledOnMount)),
    onUnmount: () => dispatch(removeSearchBar(ownProps.id)),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(setSearchBarValue(ownProps.id, event.target.value)),
});

export const SearchBarConnected: React.ComponentClass<ISearchBarProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(SearchBar);
