import {connect} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../../PlasmaState';
import {IDispatch, ReduxUtils} from '../../../utils/ReduxUtils';
import {changePage} from '../pagination/NavigationPaginationActions';
import {IPaginationState} from '../pagination/NavigationPaginationReducers';
import {
    INavigationPerPageDispatchProps,
    INavigationPerPageOwnProps,
    INavigationPerPageStateProps,
    NavigationPerPage,
    PER_PAGE_NUMBERS,
} from './NavigationPerPage';
import {addPerPage, changePerPage, removePerPage} from './NavigationPerPageActions';
import {IPerPageState} from './NavigationPerPageReducers';

const mapStateToProps = (state: PlasmaState, ownProps: INavigationPerPageOwnProps): INavigationPerPageStateProps => {
    const perPageNumber: number[] = ownProps.perPageNumbers || PER_PAGE_NUMBERS;
    const defaultInitialPosition: number = Math.ceil(perPageNumber.length / 2) - 1;
    const item: IPerPageState = _.findWhere(state.perPageComposite, {id: ownProps.id});
    const pagination: IPaginationState = _.findWhere(state.paginationComposite, {id: `pagination-${ownProps.id}`});
    const initialPosition: number = !_.isUndefined(ownProps.initialPosition)
        ? ownProps.initialPosition
        : defaultInitialPosition;

    return {
        currentPerPage: item ? item.perPage : perPageNumber[initialPosition],
        currentPage: pagination ? pagination.pageNb : 0,
    };
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: INavigationPerPageOwnProps,
): INavigationPerPageDispatchProps => ({
    onRender: (perPageNb: number) => dispatch(addPerPage(ownProps.id, perPageNb)),
    onDestroy: () => dispatch(removePerPage(ownProps.id)),
    onPerPageClick: (perPageNb: number, oldPerPageNb: number, currentPage: number) => {
        dispatch(changePerPage(ownProps.id, perPageNb));
        dispatch(changePage(`pagination-${ownProps.id}`, Math.floor((currentPage * oldPerPageNb) / perPageNb)));
    },
});

/**
 * @deprecated Use Mantine instead
 */
export const NavigationPerPageConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(NavigationPerPage);
