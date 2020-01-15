import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {
    INavigationPaginationDispatchProps,
    INavigationPaginationOwnProps,
    INavigationPaginationProps,
    INavigationPaginationStateProps,
    NavigationPagination,
} from './NavigationPagination';
import {addPagination, changePage, removePagination} from './NavigationPaginationActions';
import {IPaginationState} from './NavigationPaginationReducers';

const mapStateToProps = (
    state: IReactVaporState,
    ownProps: INavigationPaginationOwnProps
): INavigationPaginationStateProps => {
    const item: IPaginationState = _.findWhere(state.paginationComposite, {id: ownProps.id});

    return {
        currentPage: item ? item.pageNb : 0,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: INavigationPaginationOwnProps
): INavigationPaginationDispatchProps => ({
    onRender: () => dispatch(addPagination(ownProps.id)),
    onDestroy: () => dispatch(removePagination(ownProps.id)),
    onPageClick: (pageNb: number) => dispatch(changePage(ownProps.id, pageNb)),
});

export const NavigationPaginationConnected: React.ComponentClass<INavigationPaginationProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(NavigationPagination);
