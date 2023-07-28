import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../../utils/ReduxUtils';
import {
    INavigationPaginationDispatchProps,
    INavigationPaginationOwnProps,
    INavigationPaginationStateProps,
    NavigationPagination,
} from './NavigationPagination';
import {addPagination, changePage, removePagination} from './NavigationPaginationActions';
import {IPaginationState} from './NavigationPaginationReducers';

const mapStateToProps = (
    state: PlasmaState,
    ownProps: INavigationPaginationOwnProps,
): INavigationPaginationStateProps => {
    const item: IPaginationState = _.findWhere(state.paginationComposite, {id: ownProps.id});

    return {
        currentPage: item ? item.pageNb : 0,
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: INavigationPaginationOwnProps,
): INavigationPaginationDispatchProps => ({
    onRender: () => dispatch(addPagination(ownProps.id)),
    onDestroy: () => dispatch(removePagination(ownProps.id)),
    onPageClick: (pageNb: number) => dispatch(changePage(ownProps.id, pageNb)),
});

/**
 * @deprecated Use Mantine Pagination instead: https://mantine.dev/core/pagination/
 */
export const NavigationPaginationConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(NavigationPagination);
