import {ChangeEvent} from 'react';
import {connect} from 'react-redux';
import {findWhere} from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {ISearchBarDispatchProps, ISearchBarOwnProps, ISearchBarStateProps, SearchBar} from './SearchBar.js';
import {addSearchBar, removeSearchBar, setSearchBarValue} from './SearchBarActions.js';

const mapStateToProps = (state: PlasmaState, ownProps: ISearchBarOwnProps): ISearchBarStateProps => {
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
    onChange: (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchBarValue(ownProps.id, event.target.value)),
});

/**
 * @deprecated Use Mantine instead
 */
export const SearchBarConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(SearchBar);
